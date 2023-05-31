const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://meucomercio.com.br",
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    viewportWidth: 1600,
    viewportHeight: 1000
  },
});
