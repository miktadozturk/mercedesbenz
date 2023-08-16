const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1700,
  viewportHeight: 1100,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.mercedes-benz.co.uk/",
    includeShadowDom: true,
  },
});