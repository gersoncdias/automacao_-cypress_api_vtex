const user = Cypress.env('user_name')
const password = Cypress.env('user_password')
describe('Login Test', () => {
  it(
    'should login with generated token',
    { env: { hideCredentials: true } },
    () => {
      cy.generateAndValidateToken(user, password)
    },
  )
})
