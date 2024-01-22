const loginPage = require('../page_elements/login_page')
const loginPg = new loginPage()

Cypress.Commands.add('login', (user, password) => {
  const login = () => {
    cy.get(loginPg.campo_login).should('exist').should('be.visible').type(user)

    cy.get(loginPg.campo_senha)
      .should('exist')
      .should('be.visible')
      .type(password, { log: false })

    cy.get(loginPg.btn_login).should('exist').should('be.visible').click()

    cy.get(loginPg.btn_use_icon)
      .should('exist')
      .should('be.visible')
      .should('have.text', `Olá! ${Cypress.env('user')}`)
  }

  login()
})

Cypress.Commands.add('login_life', (user, password) => {
  const login = () => {
    cy.get(loginPg.btn_use_icon).should('exist').should('be.visible').click()
    cy.get(loginPg.campo_login).should('exist').should('be.visible').type(user)

    cy.get(loginPg.campo_senha)
      .should('exist')
      .should('be.visible')
      .type(password, { log: false })

    cy.get(loginPg.btn_login).should('exist').should('be.visible').click()

    cy.get(loginPg.name_info)
      .should('exist')
      .should('be.visible')
      .should('have.text', `Olá! ${Cypress.env('user')}`)
  }

  login()
})
Cypress.Commands.add('check_user', () => {
  cy.get(loginPg.name_info)
    .should('exist')
    .should('be.visible')
    .should('have.text', `Olá! ${Cypress.env('user')}`)
})
Cypress.Commands.add('check_no_user', () => {
  cy.get(loginPg.btn_use_icon)
    .should('exist')
    .should('be.visible')
    .should('have.text', `Olá! ${Cypress.env('no_user')}`)
})
