/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'dist',
    output: 'export',
    images:{
        loader: 'akamai',
        path:'/'
    }
};

module.exports = nextConfig;