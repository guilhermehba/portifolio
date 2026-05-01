/** @type {import('next').NextConfig} */
const repo = "portifolio";

const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
