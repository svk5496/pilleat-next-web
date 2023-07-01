/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "buytamine.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "img/**",
      },
    ],
  },
};

module.exports = nextConfig;
