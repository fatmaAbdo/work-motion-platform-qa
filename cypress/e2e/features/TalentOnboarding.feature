@login
Feature: Talent Onboarding
Background: user is logged in 

  Scenario: Add new talent
    When I select to add a new talent
    And  I add the new talent details
    Then thank you page appears
    And the new talent is added to Onboardings tab

  Scenario:  Missing talent data
    When I select to add a new talent
    And  I miss mandatory new talent details
    Then I get field is required 
    

    
  
