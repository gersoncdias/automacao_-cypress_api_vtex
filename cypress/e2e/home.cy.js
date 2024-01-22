describe('template spec', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'), {})
  })

  it('Verifica Home Page', () => {
    cy.iconWhats()
  })
})
