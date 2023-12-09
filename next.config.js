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
        source: "/card-info",
        destination: "/card-info/card-info",
      },
    ];
  },
};

module.exports = nextConfig;
