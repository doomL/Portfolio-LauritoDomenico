/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        loader: 'akamai',
        path: '/',
        domains: ['www.inplayai.it', 'www.skillmosaico.it', 'www.artemat.it'],
    },
};

module.exports = nextConfig;