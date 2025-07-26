class talentInfoPage{
    clickOnboardingData(){
        cy.contains('button', 'Onboarding Data').click()
    }
    talentInfo(firstName, secName, jobTitle, jobDesc){
        cy.get('[data-testid="Talent\'s first name(s)-value"]').should('be.visible','have.text', firstName)
        cy.get('[data-testid="Talent\'s last name(s)-value"]').should('have.text', secName)
        cy.get('[data-testid="Job title-value"]').should('have.text', jobTitle)
        cy.get('[data-testid="Job description-value"]').should('have.text', jobDesc)
    }
}
export default talentInfoPage