Feature: navigationBar test
    I'm validating the functionality of the navigationBar

    Background:
        Given I should be in the magnolia homepage

    Scenario: Validate the Tours index and dropdown
        Then I click on the "tours" index navigation bar
        Then I validate if all the "tours" buttons are visible
        And I click on the "tours" dropdown buttons and validate user landing webpage

    Scenario: Validate the Destination index and dropdown
        Then I click on the "destinations" index navigation bar
        Then I validate if all the "destinations" buttons are visible
        And I click on the "destinations" dropdown buttons and validate user landing webpage

    Scenario Outline: Validate navigation buttons on the index
        Then I click on the "<element>" index navigation bar
        And I validate user landing webpage of "<element>" index
        Examples:
            | element |
            | stories |
            | about   |
            | contact |
            | members |
