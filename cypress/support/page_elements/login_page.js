class loginPage {
  constructor() {
    this.campo_login = 'div.vtex-login-2-x-inputContainerEmail input'
    this.campo_senha = 'div.vtex-login-2-x-inputContainerPassword input'
    this.btn_login = 'div.vtex-login-2-x-sendButton button[type=submit]'
    this.btn_use_icon =
      '[data-login-wrapper="true"] > [data-testid="store-link"]'
    this.user_info = '.vtex-my-account-1-x-userInfo'
    this.name_info = '.user'
  }
}
module.exports = loginPage
