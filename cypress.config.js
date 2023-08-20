const { defineConfig } = require("cypress");
const replay = require("@replayio/cypress")

module.exports = defineConfig({
  projectId: "78vpp2",
  viewportWidth: 1700,
  viewportHeight: 1100,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      replay.default(on, config);
      return config;
    },
    baseUrl: "https://www.mercedes-benz.co.uk/",
    includeShadowDom: true,
    specPattern: 'cypress/e2e/**/*.{js, jsx, ts, tsx}',
  },
});