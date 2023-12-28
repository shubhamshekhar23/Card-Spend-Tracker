/** @type {import('next').NextConfig} */
const nextConfig = {
  /* enable custom routes */
  basePath: "/Card-Spend-Tracker-React",
  useFileSystemPublicRoutes: false,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/Card-Spend-Tracker-React",
        permanent: false, // 301 redirect (permanent),
        basePath: false,
      },
    ];
  },

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
