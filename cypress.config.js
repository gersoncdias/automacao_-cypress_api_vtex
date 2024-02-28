const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')
allureWriter
const fs = require('fs-extra')
const path = require('path')

function searchConfigFile(file) {
  const pathFile = path.resolve('.', 'cypress', 'config', `${file}.json`)
  return fs.readJson(pathFile)
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'dev'
      config = searchConfigFile(file)
      return config
    },
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
