import LoginPage from '../pages/LoginPage'
import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
const login = new LoginPage()  

Given('the login page is open', () => {
  login.visit()
})

Given("the login API will respond with invalid credentials", () => {
  cy.intercept("POST", Cypress.env('loginPath'), {
    statusCode: 404,
    fixture: "loginResponse.json"
  }).as("mockInvalidLogin");
})

When('the user enters email and password', function(dataTable) {
login.fillEmail(dataTable.rawTable[1][0])
login.fillPassword(dataTable.rawTable[1][1])
login.submit()

})

When("the user attempts to log in with incorrect credentials {string} {string}", function(userName, password){
  login.visit()
  login.fillEmail(userName)
  login.fillPassword(password)
  login.submit()
})

Then('user login successfully and gets redirect to dashboard page',() => {
  cy.wait(2000)
  cy.url().should('eq', Cypress.env('baseUrl')+'dashboard')


})

Then("an error message for invalid login should be shown", () => {
  cy.wait('@mockInvalidLogin').its('response.statusCode').should('eq', 404)
  cy.wait(2000)
  cy.get('p.sc-eUdMsg.kdcZii')
  .invoke('text')
  .then((text) => {
    const cleanedText = text.replace(/\s+/g, ' ').trim()
    expect(cleanedText).to.contain('The email and / or the password you entered is invalid')
  })})



