Feature: language verification test
    I'm validating the languages of the application

    Background:
        Given I should be in the magnolia homepage

    Scenario: Validate all the german version content.
        Then I click on the German language button at element "a[href='/travel/de/']" indexed at "0" and validate the network request
        Then I validate the German content

    Scenario: Validate all the english version content.
        Then I click on the English language button at element "#language-link li:nth-child(1)" indexed at "0"
        Then I validate the English content
