/**
 * Fetches og:image from project websites and saves to public/projects/
 * Run: node scripts/fetch-project-images.js
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PROJECTS = [
  { name: 'inplayai', url: 'https://www.inplayai.it/' },
  { name: 'skillmosaico', url: 'https://www.skillmosaico.it/' },
  { name: 'abstractforward', url: 'https://www.artemat.it/' },
  { name: 'umari', url: 'https://ecs-nodes.eu/' },
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBot/1.0)' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

function extractOgImage(html, baseUrl) {
  const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
  if (ogMatch) {
    let imgUrl = ogMatch[1].trim();
    if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
    else if (imgUrl.startsWith('/')) {
      const base = new URL(baseUrl);
      imgUrl = base.origin + imgUrl;
    }
    return imgUrl;
  }
  return null;
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function main() {
  const results = {};
  const outDir = path.join(__dirname, '../public/projects');

  for (const project of PROJECTS) {
    try {
      console.log(`Fetching ${project.url}...`);
      const html = await fetchUrl(project.url);
      const imgUrl = extractOgImage(html, project.url);

      if (imgUrl) {
        console.log(`  Found og:image: ${imgUrl}`);
        const buffer = await downloadImage(imgUrl);
        const ext = path.extname(new URL(imgUrl).pathname) || '.jpg';
        const filename = `${project.name}-og${ext}`;
        const filepath = path.join(outDir, filename);
        fs.writeFileSync(filepath, buffer);
        results[project.name] = `/projects/${filename}`;
        console.log(`  Saved to ${filename}`);
      } else {
        console.log(`  No og:image found, skipping`);
      }
    } catch (err) {
      console.log(`  Error: ${err.message}`);
    }
  }

  console.log('\nResults:', JSON.stringify(results, null, 2));
  return results;
}

main().catch(console.error);
