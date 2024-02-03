const loginPage = require('../page_elements/login_page')
const loginPg = new loginPage()

Cypress.Commands.add('my_account', () => {
  cy.get(loginPg.user_info)
    .should('exist')
    .should('be.visible')
    .should(
      'have.text',
      `${Cypress.env('account_hi')},${Cypress.env('account_user')}`,
    )
})
