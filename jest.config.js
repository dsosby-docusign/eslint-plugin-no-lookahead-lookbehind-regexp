const { createJsWithTsPreset } = require("ts-jest");

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...createJsWithTsPreset().transform,
  },
  moduleDirectories: ["node_modules", "src"],
};
