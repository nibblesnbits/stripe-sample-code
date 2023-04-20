const { defineConfig } = require("cypress");
const dotEnv = require("dotenv");
const { resolve } = require("path");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },
  env: {
    ...dotEnv.config({
      path: resolve(__dirname, "./.env"),
    }).parsed,
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  chromeWebSecurity: false,
  supportFolder: "cypress",
});
