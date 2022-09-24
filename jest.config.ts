export default {
  moduleNameMapper: {
    ".(css|scss)$": "identity-obj-proxy",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  testEnvironment: "jsdom",
};
