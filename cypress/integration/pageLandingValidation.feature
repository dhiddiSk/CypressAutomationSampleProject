Feature: UserLoginPage test
    I'm validating the User login page with various scenarios.

    Background:
        Given I should be in the magnolia loginpage

    Scenario Outline: Validate login functionality of user with valid credentials
        Then I enter login userName "<userName>" and password "<password>"
        And  I click on login button at element "button" indexed at "0"
        Then I should be in the magnoliaHomePage

        Examples:
            | userName  | password  |
            | superuser | superuser |
