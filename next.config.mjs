/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/boludeces',
  assetPrefix: '/boludeces/',
};

export default nextConfig;