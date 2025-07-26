class LoginPage {
  visit() {
    cy.visit(Cypress.env('baseUrl'))
  }
  fillEmail(email) {
    cy.get('input[name=email]').type(email)
  }
  fillPassword(password) {
    cy.get('input[name=password]').type(password)
  }
  submit() {
    cy.get('button[type=submit]').click()
  }
}
export default LoginPage