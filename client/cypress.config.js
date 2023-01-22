const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents() { },
    baseUrl: 'http://localhost:3000',
  },
});
