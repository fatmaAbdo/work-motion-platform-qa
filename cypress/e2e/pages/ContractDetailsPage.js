class ContractDetailsPage{
    insertTalentDetailsFirstPage(name, secName, jobTitle, desc){
     name != null ? cy.get('#d5deff3f-7772-328f-b79c-0eb7d0c51a85').type(name): console.log("No input")
     secName != null ? cy.get('#e64f0cca-edaa-3fdf-9490-c90f09f44e64').type(secName): console.log("No input")
     cy.get('#6c20042a-4bfd-312b-b00d-f25fcc2d69de-Yes').click()
     cy.get('#769be8cd-0214-32b3-9f7f-ee8719f2abe2-No').click()
     jobTitle!= null ? cy.get('[name="a55bffc6-7f57-3036-bcdd-f49158941f71"]').type(jobTitle): console.log("No input")
     cy.get('[name="0f9d5320-f71d-3458-ac58-093c65081831-full-time"]').click()
     desc !=null ? cy.get('#d3f07c10-4e02-3ab7-8b9d-fa4dec585b3d').type(desc): console.log("No input")
     cy.get('#c36ea050-9c84-3e98-863e-1bf8d1c332ad')
     .clear()
     .type('45')
     cy.get('[name="a2c1ae1e-7ecc-31bd-9515-1928a5a17368-fixed-term"]').click()
     cy.get('#4888400e-89f4-3c79-8b11-012ac7215428').click()
     cy.contains('button','8').click()
     cy.contains('button','Ok').click()
     cy.get('#0b0d03f9-613f-3175-812d-e5343c50aab2').click()
     cy.get('[data-testid="ArrowDropDownIcon"]').click()
     cy.contains('button','2026').click()
     cy.contains('button','8').click()
     cy.contains('button','Ok').click()
     cy.get('[name="c3950686-6ffb-3a4a-9677-2304ea71bc6c-Yes"]').click()
     cy.get('[name="43726060-8606-3432-926d-2ac495de2001-No"]').click()
     cy.get('[name="95d8516e-aa04-3721-abce-61a0d92739ea"]').type(1000)
     cy.get('.css-1wy0on6').click()
     cy.get('#react-select-4-option-1').click()
     cy.get('#onboarding-continue-btn').click()
    }
    uploadFile(filePath)
    {
       cy.get('[data-testid="FileUploadIcon"]').click()
       cy.get('input[type="file"]')
       .should('exist')
       .attachFile(filePath, { subjectType: 'input' })

    }
    insertTalentDetailsSecPage()
    {
        cy.get('[name="85bfc1b0-13fe-361b-9de4-582627e68998-Yes"]').click()
        cy.get('#onboarding-continue-btn').click()
    }
    insertTalentDetailsThirdPage(salary, number)
    {
        cy.get('[name="3427ebc4-8074-35ca-9083-f61089922b63-No"]').click()
        cy.get('[data-testid="dropdown-collection"]').click()
        cy.get('#react-select-'+number+'-listbox').each(($el, index) => {
        cy.wrap($el).click()
        cy.get('#react-select-'+number+'-option-0').click()
        cy.get('.sc-dcJsrY').should('contain.text', 'EGP')
        cy.get('[name="5fc37517-1b97-3de9-a054-7465d18085b6"]').type(salary)
        cy.get('[name="c20a642f-5ef3-397b-80cb-7e1cc16109e3-No"]').click()
        cy.get('[name="8c939979-011e-3945-9e72-d38988d1cdcc-No"]').click()
        cy.get('[name="8b7fed89-2e6d-3dd2-80e1-2b67b74b89a4.newAllowance-No"]').click()
        cy.get('#onboarding-continue-btn').click()
        })
    }

    insertTalentEmail(email){
        cy.get('[name="b08ff779-a9d1-390f-bef4-2e7cf5bd178e"]').type(email)
    }
    
    nextPage(){
        cy.get('#onboarding-continue-btn').click()

    }

    insertLastPageDetails()
    {
        cy.get('.sc-gtsqUy').click()
        cy.get('#onboarding-finish-btn').click()
    }

}
export default ContractDetailsPage