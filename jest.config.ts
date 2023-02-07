export default {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 94,
      functions: 94,
      lines: 94,
      statements: 94,
    },
  },
  moduleNameMapper: {
    ".(css|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};
