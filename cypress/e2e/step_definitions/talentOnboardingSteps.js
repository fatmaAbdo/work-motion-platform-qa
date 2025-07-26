import talentOnboarding from '../pages/TalentOnboardingPage'
import ContractDetailsPage from '../pages/ContractDetailsPage'
import {When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import TalentViewListPage from '../pages/TalentViewListPage'
import { constants } from '../../support/utilities/constants'
import { loginBeforeHook } from '../../support/utilities/loginHooks'

const talentOnboard = new talentOnboarding()
const detailsPage = new ContractDetailsPage()
const talentView = new TalentViewListPage()


loginBeforeHook()

When('I select to add a new talent', ()=> {
     cy.wait(10000)
     talentOnboard.addNewTalent()
     cy.wait(2000)
     talentOnboard.workGlobal()
     talentOnboard.selectCountry()
     cy.url().should('include','onboarding/EG' )

})

When('I add the new talent details', (nam, lastName,)=>{
    detailsPage.insertTalentDetailsFirstPage(constants.firstName, constants.secName, constants.jobTitle, constants.desc )
    detailsPage.uploadFile("jobDesc.pdf")
    detailsPage.insertTalentDetailsSecPage()
    detailsPage.insertTalentDetailsThirdPage(constants.salary,5)
    cy.intercept(
    'POST',
    '**/candidates/v2/applications/**/steps/**/components',
    {
      statusCode: 200,
      body: {}
    }
    ).as('mockValidEmail');
    detailsPage.insertTalentEmail(constants.email)
    detailsPage.nextPage()
    cy.wait('@mockValidEmail')
    detailsPage.insertLastPageDetails()
})

When('I miss mandatory new talent details',()=>{
    detailsPage.insertTalentDetailsFirstPage(constants.firstName,constants.secName,null, null )
    detailsPage.uploadFile("jobDesc.pdf")
})

Then('thank you page appears', ()=>{
    cy.get('.sc-dWZqqJ').should('be.visible')
})

Then('the new talent is added to Onboardings tab',()=>{
    talentView.visit()
    talentView.userAppearenceOnboardingsTab()
    
})

Then('I get field is required',()=>{
    cy.contains('span', 'Job title field is required')
    cy.contains('span','Job description field is required')
})