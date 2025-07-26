import { Before } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../../e2e/pages/LoginPage"
const loginPage = new LoginPage()

export function loginBeforeHook() {
  Before({ tags: "@login" }, () => {
    loginPage.visit()
    loginPage.fillEmail(Cypress.env("email"))
    loginPage.fillPassword(Cypress.env("password"))
    loginPage.submit()
  })
  
}
