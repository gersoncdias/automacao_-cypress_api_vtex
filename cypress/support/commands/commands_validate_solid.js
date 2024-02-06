// Obtém as configurações do ambiente
const env = Cypress.env()

// Função para gerar o token inicial
Cypress.Commands.add('generateToken', (username) => {
  // Realiza uma chamada à API para iniciar o processo de autenticação
  return cy
    .api({
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
    })
    .then((response) => {
      // Extrai o valor do cookie _vss da resposta
      const vssCookie = response.headers['set-cookie']
        .find((cookie) => cookie.startsWith('_vss='))
        .split(';')[0]

      // Retorna o valor do cookie _vss
      return vssCookie
    })
})

// Função para validar o token gerado
Cypress.Commands.add('validateToken', (username, password, vssCookie) => {
  // Realiza uma chamada à API para validar o token utilizando o cookie _vss
  return cy
    .api({
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
    })
    .then((validateResponse) => {
      // Extrai e retorna o valor do token autenticado
      const authCookie = validateResponse.body.authCookie
      const authToken = authCookie.Value

      return authToken
    })
})

// Função principal que utiliza as funções auxiliares para gerar e validar o token
Cypress.Commands.add('generateAndValidateToken', (username, password) => {
  // Chama a função para gerar o token inicial
  cy.generateToken(username).then((vssCookie) => {
    // Chama a função para validar o token e retorna o token autenticado
    return cy.validateToken(username, password, vssCookie)
  })
})
