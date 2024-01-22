const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

describe('Login Test', () => {
  it('Login Vivara', () => {
    cy.visit(Cypress.env('url') + '/login')
    cy.login(user, password)
  })

  it('Login Life', () => {
    cy.visit(`${Cypress.env('url')}${Cypress.env('life')}`)
    cy.login_life(user, password)
  })
})
