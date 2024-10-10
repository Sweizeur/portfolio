/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.mjs
export default {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
