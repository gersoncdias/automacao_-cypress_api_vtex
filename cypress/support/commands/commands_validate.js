const env = Cypress.env()

Cypress.Commands.add('generateAndValidateToken', (username, password) => {
  cy.request({
    method: 'POST',
    url: `${env.url_api}/pub/authentication/startlogin`,
    headers: {},
    form: true,
    body: {
      accountName: 'lojavivara',
      scope: 'lojavivara',
      returnUrl: env.url,
      callbackUrl: `${env.url_api}/oauth/finish?popup=false`,
      user: username,
      fingerprint: '',
    },
  }).then((response) => {
    const vssCookie = response.headers['set-cookie']
      .find((cookie) => cookie.startsWith('_vss='))
      .split(';')[0]

    cy.request({
      method: 'POST',
      url: `${env.url_api}/pub/authentication/classic/validate`,
      headers: {
        Cookie: `VtexIdclientAutCookie_lojavivara=${vssCookie}`,
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
