const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
  typescript: {
    enableTypeChecking: true,
  },
  plugins: [
    {
      // plugin: CracoAlias,
      plugin: CracoAliasPlugin,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
