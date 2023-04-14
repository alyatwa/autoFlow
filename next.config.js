/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
         // Do not rewrite API routes
         {
          source: '/api/:any*',
          destination: '/api/:any*',
        },
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
}

module.exports = nextConfig
