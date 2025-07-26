import {When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import TalentViewListPage from '../pages/TalentViewListPage'
import { constants } from "../../support/utilities/constants"
import talentInfoPage from '../pages/TalentInfoPage'
const talentView = new TalentViewListPage()
const talentInfo = new talentInfoPage()

When('I search for the newly added talent',()=>{
    cy.url().should('include', '/dashboard')
    talentView.visit()
    talentView.searchForTheNewTalent(constants.firstName+" "+constants.secName)

})

Then('only the newly added talent appears',()=>{
    cy.wait(5000)
    talentView.tableOfTalents(constants.firstName +" "+ constants.secName)
})

Then('I should get the correct information',()=>{
    cy.wait(5000)
    talentView.viewMore()
    cy.url().should('include', 'basic-info')
    talentInfo.clickOnboardingData()
    talentInfo.talentInfo(constants.firstName, constants.secName, constants.jobTitle, constants.desc)

  

})