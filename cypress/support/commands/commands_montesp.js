// cypress/support/commands.js
const montespPage = require('../page_elements/montesp_page')
const montespPg = new montespPage()

Cypress.Commands.add('montesp', () => {
  cy.get(montespPg.btm_msp).click()
  cy.get('.modal-tutorial__content > img').should('be.visible')
})
