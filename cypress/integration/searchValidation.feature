Feature: Validate search test
    I'm validating the search functionality with various scenarios

    Background:
        Given I should be in the magnolia homepage

    Scenario: Validate search functionality of user
        Then I enter "Europe" in the seach box at element "#nav-search" and press enter, I should see atleast three results.
        Then I click on the first seach result page and validate user landing webpage
