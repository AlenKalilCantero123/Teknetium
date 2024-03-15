/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.mjs

export default {
    ...nextConfig,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true, // 301 redirect (permanent)
        },
      ];
    },
};
