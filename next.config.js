/** @type {import('next').NextConfig} */
const nextConfig = {
  /* enable custom routes */
  useFileSystemPublicRoutes: false,

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home/home",
      },
      {
        source: "/ui-story",
        destination: "/ui-story/ui-story",
      },
      {
        source: "/card-details",
        destination: "/card-details/card-details",
      },
    ];
  },
};

module.exports = nextConfig;
