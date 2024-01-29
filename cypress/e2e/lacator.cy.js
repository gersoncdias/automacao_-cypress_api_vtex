// Importe o comando personalizado do Cypress (caso você tenha um)
// Cypress.Commands.add('setUserLocation', ...);

describe('Teste Cypress para API de CEP', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
  })

  it('Deve fazer uma requisição para a API e definir a resposta no localStorage', () => {
    cy.request({
      method: 'POST',
      url: 'https://www.vivara.com.br/api/getPostalCodeData',
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
      },
      body: {
        postalCode: '38840-000',
      },
    }).then((response) => {
      expect(response.status).to.eq(200)

      cy.window().then((win) => {
        win.localStorage.setItem('userLocation', JSON.stringify(response.body))
      })
    })

    cy.visit('https://www.vivara.com.br/')
  })
})
