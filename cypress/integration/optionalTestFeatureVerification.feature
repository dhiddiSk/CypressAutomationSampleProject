Feature: optional Feature Verification test
    I'm validating the active feature

    Background:
        Given I should be in the magnolia homepage

    Scenario: Validate the Tours index and active button
        Then I click on the "tours" index navigation bar
        Then I validate if all the "tours" buttons are visible
        And I click on the tours dropdown active button and validate user landing webpage
        Then I click on the "Hut To Hut" button at element "a[href = '/travel/tours/magnolia-travels/Hut-to-Hut-in-the-Swiss-Alps.html']" and validate the information

    Scenario: Validate the swiss alps tour booking
        Then I click on the "tours" index navigation bar
        Then I validate if all the "tours" buttons are visible
        And I click on the tours dropdown active button and validate user landing webpage
        Then I click on the "Hut To Hut" button at element "a[href = '/travel/tours/magnolia-travels/Hut-to-Hut-in-the-Swiss-Alps.html']" and validate the information
        And I click on the "Book Tour" button at element ".btn.btn-primary.btn-lg.book-button" indexed at "0"
        Then I enter number of travellers details, trip options and click on next button at element "input[value='Next step']"
        And I type in additional meal notes at element "textarea[name='additionalMealNotes']" and click on next button at element "input[value='Next step']"
        Then Enter the personal details and click on next button at element "input[value='Next step']"
        Then I click on confirm button at element "input[value='Confirm Booking']"
        And I validate the booking error message text at element ".text.error"
