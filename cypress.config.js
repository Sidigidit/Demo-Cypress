const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000,
    specPattern: 'cypress/e2e/**/*.spec.js',
    reporter: 'mochawesome',
    setupNodeEvents(on, config) {
    },
  },
});
