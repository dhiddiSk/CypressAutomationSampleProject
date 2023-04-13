Feature: UserLoginPage test
    I'm validating the User login page with various scenarios.

    Background:
        Given I should be in the magnolia loginpage

    Scenario Outline: Validate login functionality of user with valid credentials
        Then I enter login userName "<userName>" and password "<password>"
        And  I click on login button at element "button" indexed at "0" with the "success" network request validations
        Then I should be in the magnoliaHomePage

        Examples:
            | userName  | password  |
            | superuser | superuser |


    Scenario Outline: Validate login functionality of user with  wrong credentials
        Then I enter login userName "<userName>" and password "<password>"
        And I click on login button at element "button" indexed at "0" with the "failure" network request validations
        Then I should see warning message "loginErrorMessage" at element "#validation-bubble"

        Examples:
            | userName     | password     |
            | superuser    | superuser123 |
            | superuser123 | superuser123 |
            | superuser123 | superuser    |
