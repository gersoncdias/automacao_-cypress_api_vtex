const footerPage = require('../page_elements/footer_page')
const footerPg = new footerPage()

Cypress.Commands.add('searchStoreFooter', () => {
  cy.get(footerPg.title)
    .should('exist')
    .and('be.visible')
    .and('have.text', 'nossas lojas')
    .and(($h2) => {
      expect($h2).to.have.css('color', 'rgb(0, 0, 0)')
      expect($h2).to.have.css('font-size', '36px')
      expect($h2).to.have.css('font-weight', '600')
      const fontFamilyValue = $h2.css('font-family')
      expect(fontFamilyValue).to.include('Cormorant Garamond')
    })

  cy.get(footerPg.seletct_estate_cite)
    .should('exist')
    .should('be.visible')
    .should('contain.text', 'Estado')
    .should('contain.text', 'Cidade')

  cy.get(footerPg.state)
    .should('exist')
    .should('be.visible')
    .should('contain.text', 'Selecione')

  cy.get(footerPg.city)
    .should('exist')
    .should('be.visible')
    .should('contain.text', 'Selecione')

  cy.get(footerPg.btn_meet)
    .should('exist')
    .should('be.visible')
    .should('contain.text', 'Encontrar Lojas')
    .should('have.css', 'background-color', 'rgb(255, 166, 135)')

  cy.get(footerPg.sub_title)
    .should('exist')
    .and('be.visible')
    .and('have.text', 'Encontre a Vivara mais próxima de você')
    .and(($p) => {
      expect($p).to.have.css('color', 'rgb(115, 115, 115)')
      expect($p).to.have.css('font-size', '14px')
      const fontFamilyValue = $p.css('font-family')
      expect(fontFamilyValue).to.include('Roboto')
    })
})

Cypress.Commands.add('footer', () => {
  cy.get(footerPg.footer)
    .should('exist')
    .should('be.visible')
    .should('have.css', 'background-color', 'rgb(254, 237, 228)')

  cy.get(footerPg.text_infos_footer)
    .should('exist')
    .should('be.visible')
    .contains(
      'Clique na opção de WhatsApp para ser atendido ou mande e-mail para sac.ecommerce@vivara.com.br',
    )
  cy.get(footerPg.text_infos_footer)
    .should('exist')
    .should('be.visible')
    .contains(
      'Tellerina Comércio de Presente e Artigos pra Decoração S. A.- CNPJ: 84.453.844/0021-21 Endereço: Rua Verbo Divino - Chácara Santo Antonio/SÃO PAULO CEP 04.719-901',
    )

  cy.get(footerPg.google_safe__icon)
    .should('exist')
    .should('be.visible')
    .should('have.length', 1)

  cy.get(footerPg.ra_indication)
    .should('exist')
    .should('be.visible')
    .should('have.length', 1)

  cy.get(footerPg.div_footer_copyright)
    .should('exist')
    .should('be.visible')
    .should('have.length', 1)
})
Cypress.Commands.add('footerSectionMenu', () => {
  cy.get(footerPg.newsletter_title)
    .should('exist')
    .should('be.visible')
    .should('contain.text', 'Acompanhe nossas novidades')
    .and(($h2) => {
      expect($h2).to.have.css('color', 'rgb(0, 0, 0)')
      expect($h2).to.have.css('font-size', '16px')
      expect($h2).to.have.css('font-weight', '700')
      const fontFamilyValue = $h2.css('font-family')
      expect(fontFamilyValue).to.include('Cormorant Garamond')
    })

  cy.get(footerPg.div_newsletter)
    .should('exist')
    .should('be.visible')
    .should(
      'contain.text',
      'Cadastre seu e-mail para  receber informações exclusivas',
    )
    .and(($p) => {
      expect($p).to.have.css('color', 'rgb(23, 26, 28)')
      expect($p).to.have.css('font-size', '16px')
      const fontFamilyValue = $p.css('font-family')
      expect(fontFamilyValue).to.include('Roboto')
    })

  cy.get(footerPg.newsletter_mail)
    .should('exist')
    .should('be.visible')
    .should('have.attr', 'type', 'email')
    .should('have.attr', 'placeholder', 'E-mail')

  cy.get(footerPg.newsletter_registerButton)
    .should('exist')
    .should('be.visible')
    .should('contain.text', 'Cadastrar')
    .should('have.css', 'background-color', 'rgb(33, 36, 41)')

  cy.get(footerPg.policy_text)
    .should('exist')
    .should('be.visible')
    .should(
      'have.text',
      'Tendo analisado e compreendido a Politica de Privacidade, declaro ter mais de 18 anos de idade e aceito receber comunicados de marketing da Vivara e Life by Vivara.',
    )

  cy.get(footerPg.footer_section_text)
    .should('contain.text', 'Sobre a Vivara')
    .should('contain.text', 'Sustentabilidade')
    .should('contain.text', 'Trabalhe conosco')
    .should('contain.text', 'Relação com investidores')
    .should('contain.text', 'Blog')
    .should('contain.text', 'Canal de Denúncias')
    .should('contain.text', 'Acompanhe o seu pedido')
    .should('contain.text', 'Whatsapp')
    .should('contain.text', 'sac.ecommerce@vivara.com.br')
    .should('contain.text', 'Horário de Atendimento')
    .should('contain.text', 'Vendas Corporativas')
    .should('contain.text', 'Marketplaces e Parcerias')
    .should('contain.text', 'Política de garantia')
    .should('contain.text', 'Política de consertos')
    .should('contain.text', 'Aviso externo de privacidade')
    .should('contain.text', 'Formas de Pagamento')
    .should('contain.text', 'Regulamento GiftBack')
    .should('contain.text', 'Cartão Presente')

  cy.get(footerPg.footer_section_social)
    .should('exist')
    .should('be.visible')
    .should('contain.text', 'Redes Sociais')
})

Cypress.Commands.add('validateSocialIconsVisibility', () => {
  cy.get(footerPg.footer_bottom__social).should('be.visible')
  cy.get(footerPg.icon_image).should('be.visible')
  cy.get(footerPg.icon_image).should('have.attr', 'alt', 'Google Play Icon')
  cy.get(footerPg.icon_apple)
    .eq(1)
    .should('be.visible')
    .and('have.attr', 'alt', 'Apple Store Logo')
})
