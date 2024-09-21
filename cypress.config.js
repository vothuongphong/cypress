const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://penguin-uat.stage-ap.apps.bsci.com/auth/login',
  },
})