const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

describe('My Account', () => {
  it('Verifica My Account Life', () => {
    cy.visit(`${Cypress.env('url')}${Cypress.env('life')}`)
    cy.login_life(user, password)
    cy.my_account()
    cy.my_account_user()
  })
})
