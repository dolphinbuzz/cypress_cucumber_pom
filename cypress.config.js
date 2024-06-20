const { defineConfig } = require("cypress");
const cucumber = require ('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 10000,
    specPattern: 'cypress/e2e/**/*.feature',
    video:true,

    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())

    },
    env: {
      snapshotOnly: true
    }
  },
});
