class TalentViewListPage{
    visit(){
     cy.visit('https://beta.workmotion.com/talents/onboardings?companyId=da83d3b5-a4f8-491c-a3d3-12ab1ff2e2a9')
     cy.wait(2000)
    }
    userAppearenceOnboardingsTab(){
     cy.contains('span', 'Mahmoud Zaki')

    }
    searchForTheNewTalent(talentName){
        cy.get('input[placeholder="Search for talent"]').should('be.visible').type(talentName)
    }
    tableOfTalents(talentName)
    {
     cy.get('tbody tr').each(($el) => {
     const rowText = $el.text().toLowerCase().trim()
     expect(rowText).to.includes(talentName.toLowerCase())
})
    }
    selectTheTalent(talentName){
     cy.contains('span', talentName)
     .should('be.visible')
     .click()    
    }
    viewMore(){
        cy.get('[data-testid="action-btn"]')
        .first()
        .click()
        cy.get('.sc-NOKRk').eq(1).click()
    }

}
export default TalentViewListPage