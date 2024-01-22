// cypress/integration/login.spec.js
const user = Cypress.env('user_name')
const password = Cypress.env('user_password')
describe('Login Test', () => {
  it('should login with generated token', () => {
    cy.generateAndValidateToken(user, password)
  })
})
