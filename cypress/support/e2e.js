import './commands/commands_home'
import './commands/commands_header'
import './commands/commands_footer'
import './commands/commands_login'
import './commands/commands_validate'
import './commands/commands_account'
import 'cypress-plugin-api'
import '@shelex/cypress-allure-plugin'

require('cypress-plugin-xhr-toggle')

Cypress.on('uncaught:exception', () => {
  return false
})

const currentDate = new Date().toISOString()
before(() => {
  cy.setCookie('OptanonAlertBoxClosed', currentDate)
  cy.setCookie(
    'OptanonConsent',
    'consentId=4a663c7d-12bf-4428-be1a-99ce8823c598&datestamp=Sun+Jan+28+2024+23%3A39%3A56+GMT-0300+(Hor%C3%A1rio+Padr%C3%A3o+de+Bras%C3%ADlia)&version=202308.1.0&interactionCount=0&isGpcEnabled=0&browserGpcFlag=0&isIABGlobal=false&hosts=&landingPath=https%3A%2F%2Fwww.vivara.com.br%2F&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1%2CC0007%3A1',
  )
})
