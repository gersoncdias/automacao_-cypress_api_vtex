describe('Home', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'), {})
  })

  it('Verifica Home Page', () => {
    cy.header_vivara()
    cy.footer()
    cy.footerSectionMenu()
    cy.iconWhats()
  })
})
