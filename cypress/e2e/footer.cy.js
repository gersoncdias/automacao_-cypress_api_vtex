const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

describe.skip('Deve validar o footer em vivara não Logado', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'), {})
  })

  afterEach(() => {
    cy.check_no_user()
  })

  it('Pesquisar footer da Loja', () => {
    cy.searchStoreFooter()
  })
  it('Menu da Seção de footer', () => {
    cy.footerSectionMenu()
  })
  it('Verifica Contêiner de footer', () => {
    cy.footer()
  })
  it('Validar ícones de redes sociais', () => {
    cy.validateSocialIconsVisibility()
  })
})
describe('Deve validar o footer em vivara Logado', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'), {})
    cy.generateAndValidateToken(user, password).then((authToken) => {
      cy.setCookie('VtexIdclientAutCookie_lojavivara', authToken)
      cy.visit(Cypress.env('url'))
    })
  })

  afterEach(() => {
    cy.check_user()
  })

  it('Pesquisar footer da Loja', { env: { snapshotOnly: true } }, () => {
    cy.searchStoreFooter()
  })

  it('Menu da Seção de footer', () => {
    cy.footerSectionMenu()
  })

  it('Verifica Contêiner de footer', () => {
    cy.footer()
  })

  it('Validar ícones de redes sociais', () => {
    cy.validateSocialIconsVisibility()
  })
})
