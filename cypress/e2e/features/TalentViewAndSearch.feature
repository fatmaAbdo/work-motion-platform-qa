@login
Feature: Talent View And Search
Background: user is logged in

Scenario: Talent View And Search
When I search for the newly added talent 
Then only the newly added talent appears

Scenario: check the newly added talent info
When I search for the newly added talent 
Then I should get the correct information