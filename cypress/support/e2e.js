import './commands/commands_home'
import './commands/commands_montesp'
import './commands/commands_header'
import './commands/commands_footer'
import './commands/commands_login'
import './commands/commands_validate'
import 'cypress-plugin-xhr-toggle'

Cypress.on('uncaught:exception', () => {
  return false
})

const currentDate = new Date().toISOString()

before(() => {
  cy.setCookie('OptanonAlertBoxClosed', currentDate)
})
