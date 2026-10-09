/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "imgproxy.fourthwall.dev" }],
  },
};

module.exports = nextConfig;
