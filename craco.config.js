const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/ui": path.resolve(__dirname, "src/components/ui"),
      "@/styles": path.resolve(__dirname, "src/styles"),
      "@/constants": path.resolve(__dirname, "src/data/constants"),
      "@/services": path.resolve(__dirname, "src/services"),
      "@/mockdata": path.resolve(__dirname, "src/data/mockdata"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/context": path.resolve(__dirname, "src/context"),
      "@/features": path.resolve(__dirname, "src/features"),
    },
  },
};
