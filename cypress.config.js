const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    env: {
      hideXhr: true,
      snapshotOnly: true,
      hideCredentials: true,
    },
  },
  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  modifyObstructiveCode: false,
  viewportWidth: 1467,
  viewportHeight: 1017,
  video: false,
  fixturesFolder: false,
  notifications: 'allow',
  geolocation: 'allow',
})
