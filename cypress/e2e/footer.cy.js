describe('Deve validar o footer em vivara', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'), {})
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
