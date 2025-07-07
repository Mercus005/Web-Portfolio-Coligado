const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/Web-Portfolio-Coligado" : "",
  assetPrefix: isProd ? "/Web-Portfolio-Coligado/" : "",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/Web-Portfolio-Coligado" : "",
  },
};

module.exports = nextConfig;
