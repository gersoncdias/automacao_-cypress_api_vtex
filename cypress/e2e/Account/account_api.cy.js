const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

describe('MY Account API', () => {
  beforeEach(() => {
    cy.generateAndValidateToken(user, password).then((authToken) => {
      cy.setCookie('VtexIdclientAutCookie_lojavivara', authToken, {
        domain: 'secure.vivara.com.br',
        path: '/account',
      })

      cy.visit(Cypress.env('url_account_login'))
    })
  })
  it('Verifica My Account', () => {
    cy.my_account_user()
  })
})
