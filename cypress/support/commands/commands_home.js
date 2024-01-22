// cypress/support/commands.js
const homePage = require('../page_elements/home_page')
const homePg = new homePage()

Cypress.Commands.add('iconWhats', () => {
  cy.get(homePg.icon_whats).should('exist').should('be.visible').click()

  cy.get(homePg.open_chatbot_whats).should('exist').should('be.visible')

  cy.get(homePg.chat_bot_text).should(
    'have.text',
    'PRECISA DE AJUDA?Compre com uma vendedoraPERSONAL SHOPPERConsulte status de pedidos ou outras questõesSUPORTE VIVARAX',
  )
  cy.get(homePg.close_chatbot_whats).click()

  cy.get(homePg.fechaicon_whats).click()

  cy.get(homePg.chat_bot_whats).should('not.exist')
})
