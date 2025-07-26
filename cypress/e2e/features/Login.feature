Feature: test login scenarios
 
Scenario Outline: User attempts to log in with different credentials
    Given the login page is open
    When the user enters email and password
    |                         email                | password      | 
    |   avengers.engineering+hr1@workmotion.com    | DummyPass.12  |
    Then user login successfully and gets redirect to dashboard page



Scenario: User attempts to log in with invalid credentials
    Given the login API will respond with invalid credentials
    When the user attempts to log in with incorrect credentials "wrongEmail@workmotion.com" "123"
    Then an error message for invalid login should be shown   
