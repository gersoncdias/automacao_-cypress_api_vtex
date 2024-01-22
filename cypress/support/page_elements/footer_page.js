class footerPage {
  constructor() {
    this.icon_apple =
      'a[data-fs-link="true"][data-testid="store-link"] [data-fs-icon="true"][data-testid="store-icon"] img'
    this.icon_image =
      '.google > [data-testid="store-link"] > [data-testid="store-icon"] > img'
    this.footer_bottom__social = '.social-container-li [data-fs-icon="true"]'
    this.footer_section_social = '.social-text'
    this.footer_section_text = '.menu'
    this.policy_text = '.policy-text'
    this.newsletter_registerButton = '.newsletter-registerButton'
    this.newsletter_mail = '#newsletter-mail'
    this.div_newsletter = '.newsletter-container'
    this.newsletter_title = '.newsletter-title'
    this.div_sub_newsletter_subtitle = 'newsletter-subtitle'
    this.btn_meet = '#findStoreButton'
    this.state = '#state'
    this.city = '#city'
    this.seletct_estate_cite = '.selectDiv'
    this.title = '.title'
    this.sub_title = '.content-searchStore'
    this.footer = '.footer-container'
    this.text_develop = '.developer-container'
    this.area_label_footer_quality = '[aria-label="Quality Digital Website"]'
    this.area_label_footer_Vtex = '[aria-label="Vtex Icon"]'
    this.text_infos_footer = '.footer-infos-container'
    this.google_safe__icon = '.google-safe__icon'
    this.ra_indication = '.ra-indication'
    this.reputation_ra = '#reputation-ra'
    this.div_footer_copyright =
      '.copyright-container a[data-fs-link="true"][data-testid="store-link"][href="/"][data-vivara-link="true"][aria-label="vivara-logo-image"][title="Vivara"]'
  }
}

module.exports = footerPage
