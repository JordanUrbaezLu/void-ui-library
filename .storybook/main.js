const path = require("path");

module.exports = {
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],

  core: {
    builder: "webpack5",
  },

  features: {
    postcss: false,
    storyStoreV7: true,
  },

  framework: "@storybook/react",

  stories: ["../src/**/*.stories.tsx"],

  webpackFinal(config) {
    return {
      ...config,

      module: {
        ...config.module,

        rules: [
          ...config.module.rules,

          {
            include: path.resolve(__dirname, ".."),
            test: /\.scss$/,
            use: [
              "style-loader",

              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[local]--[hash:base64:5]",
                  },
                },
              },

              "sass-loader",
            ],
          },
        ],
      },
    };
  },
};
