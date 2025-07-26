## 📦 Tech Stack

Automated end-to-end testing project using **Cypress** with **Cucumber (Gherkin)** syntax.
- [Cypress](https://docs.cypress.io/)
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Browserify Preprocessor](https://github.com/cypress-io/browserify-preprocessor)
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)


**Pre-requisites:**

### 1. Clone the Repository


git clone https://github.com/fatmaAbdo/work-motion-platform-qa.git
cd work-motion-platform-qa

### 2.
npm install

### 3.

npx cypress open

**Notes:**

Scenario: Talent View And Search is failing as after searching for the new talent with the full name another talent appears on the table has the same firstName, which is wrong

after adding the talent, when I search for it on Onboarding tab I see the status is onboarding started not invitation sent
