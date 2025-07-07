const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? "/Web-Portfolio-Coligado" : "",
  assetPrefix: isProd ? "/Web-Portfolio-Coligado/" : "",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
