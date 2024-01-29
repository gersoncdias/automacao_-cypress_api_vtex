describe('Teste Cypress para a página da pulseira', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.window().then((win) => {
      win.localStorage.setItem(
        'userLocation',
        '{"data":{"geoId":"3456283","city":"Niterói","region":"Rio de Janeiro","regionId":"RJ","country":"BR","cName":"Brazil","request":"2042023c1d89faac1bcc30b5cf37f369","latitude":"64a72d3e5f5f3d1faa7e3b479980e9b8","longitude":"34674a0bddd23f6295abb6876905ddc0"},"_expires":1706577319000}',
      )
    })
  })

  it('Prod', () => {
    cy.visit(Cypress.env('url') + '/pulseira-life-sua-historia-pl00015208/p')
    cy.montesp()
  })
})
