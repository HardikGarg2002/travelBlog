/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    logging: {
      level: "verbose",
    },
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "www.theblondeabroad.com",
      "css-tricks.com",
    ],
  },
};

module.exports = nextConfig;
