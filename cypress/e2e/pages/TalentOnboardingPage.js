class talentOnboarding{
    addNewTalent()
    {
        cy.get('[data-testid="AddIcon"]').should('be.visible').click()
    }
    workGlobal()
    {
        cy.get('[data-testid="workglobal-logo"]').should('be.visible').click()
    }
    selectCountry()
    {
        cy.get('.css-1wy0on6').each(($el, index) => {
        cy.wrap($el).click()
        cy.get('#react-select-3-option-44').click()
         })
        cy.get('#onboarding-get-started-btn').click()
    }
}
export default talentOnboarding