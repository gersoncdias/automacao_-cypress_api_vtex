Cypress.Commands.add('generateAndValidateToken', (username, password) => {
  cy.api({
    method: 'POST',
    url: 'https://secure.vivara.com.br/api/vtexid/pub/authentication/startlogin',
    headers: {
      // Adicione os cabeçalhos necessários aqui
    },
    form: true,
    body: {
      accountName: 'lojavivara',
      scope: 'lojavivara',
      returnUrl: 'https://secure.vivara.com.br/',
      callbackUrl:
        'https://secure.vivara.com.br/api/vtexid/oauth/finish?popup=false',
      user: username,
      fingerprint: '',
    },
  }).then((response) => {
    const vssCookie = response.headers['set-cookie']
      .find((cookie) => cookie.startsWith('_vss='))
      .split(';')[0]

    cy.api({
      method: 'POST',
      url: 'https://secure.vivara.com.br/api/vtexid/pub/authentication/classic/validate',
      headers: {
        Cookie: `VtexIdclientAutCookie_lojavivara=${vssCookie}`,
        // Outros cabeçalhos conforme necessário
      },
      form: true,
      body: {
        login: username,
        password: password,
      },
    }).then((validateResponse) => {
      const authCookie = validateResponse.body.authCookie
      const authToken = authCookie.Value

      cy.wrap(authToken)
    })
  })
})
