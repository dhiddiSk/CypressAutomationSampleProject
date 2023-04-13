/// <reference types="Cypress" />
import {
  Then,
  And
} from "cypress-cucumber-preprocessor/steps";
import * as constants from "../../support/constants";

Then(/^I click on the \"([^\"]*)\" index navigation bar$/, function (item) {
  cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(1)").click();
});

Then(
  /^I validate if all the \"([^\"]*)\" buttons are visible$/,
  function (tours) {
    cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(1) li").each(
      ($el, index, $list) => {
        // write an assertion saying the element contains that particular text
        cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(1) li")
          .eq(index)
          .should(
            "contain.text",
            constants.navigationDropdownElements.tours[index]
          );
      }
    );
  }
);

Then(
  /^I click on the \"([^\"]*)\" button at element \"([^\"]*)\" and validate the information$/,
  function (huttohut, element) {
    cy.get(element).click();
    cy.get(
      ".product-properties .product-property:nth-child(1) .property-label"
    ).should("have.text", constants.activeDropdownHutToHutContent.cityKey);
    cy.get(
      ".product-properties .product-property:nth-child(1) .property-value"
    ).should("have.text", constants.activeDropdownHutToHutContent.cityValue);
    cy.get(
      ".product-properties .product-property:nth-child(2) .property-label"
    ).should("have.text", constants.activeDropdownHutToHutContent.durationKey);
    cy.get(
      ".product-properties .product-property:nth-child(2) .property-value"
    ).should(
      "have.text",
      constants.activeDropdownHutToHutContent.durationValue
    );
    cy.get(
      ".product-properties .product-property:nth-child(3) .property-label"
    ).should("have.text", constants.activeDropdownHutToHutContent.operatorKey);
    cy.get(
      ".product-properties .product-property:nth-child(3) .property-value"
    ).should(
      "have.text",
      constants.activeDropdownHutToHutContent.operatorValue
    );
  }
);

And(
  /^I click on the tours dropdown active button and validate user landing webpage$/,
  function () {
    cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(1) li")
      .eq(0)
      .click();
  }
);

And(
  /^I click on the \"([^\"]*)\" button at element \"([^\"]*)\" indexed at \"([^\"]*)\"$/,
  function (booktour, element, index) {
    cy.get(element).eq(index).click();
  }
);

const checkBox = function (element, status) {
  if (status) {
    cy.get(element).check();
  }
};

Then(
  /^I enter number of travellers details, trip options and click on next button at element \"([^\"]*)\"$/,
  function (element) {
    cy.get('input[name="adults"]').type(
      constants.activeDropdownHutToHutContent.ageOfAdults
    );
    cy.get('input[name="youth"]').type(
      constants.activeDropdownHutToHutContent.adults
    );
    checkBox(
      "#upgrades_0",
      constants.activeDropdownHutToHutContent.airportPickUp
    );
    checkBox(
      "#upgrades_1",
      constants.activeDropdownHutToHutContent.carbonOffset
    );
    checkBox(
      "#upgrades_2",
      constants.activeDropdownHutToHutContent.supportLocalCommunity
    );
    cy.get(element).click();
  }
);

And(
  /^I type in additional meal notes at element \"([^\"]*)\" and click on next button at element \"([^\"]*)\"$/,
  function (note, element) {
    cy.get(note).type(constants.activeDropdownHutToHutContent.mealsNotes);
    cy.get(element).click();
  }
);

Then(
  /^Enter the personal details and click on next button at element \"([^\"]*)\"$/,
  function (element) {
    cy.get("input[name='firstName']").type(
      constants.activeDropdownHutToHutContent.firstName
    );
    cy.get("input[name='lastName']").type(
      constants.activeDropdownHutToHutContent.lastName
    );
    cy.get("input[name='email']").type(
      constants.activeDropdownHutToHutContent.email
    );
    cy.get("input[name='phone']").type(
      constants.activeDropdownHutToHutContent.phone
    );
    cy.get("input[name='city']").type(
      constants.activeDropdownHutToHutContent.city
    );
    cy.get("input[name='postalOrZip']").type(
      constants.activeDropdownHutToHutContent.postal
    );
    cy.get("input[name='country']").type(
      constants.activeDropdownHutToHutContent.country
    );
    cy.get("input[name='province']").type(
      constants.activeDropdownHutToHutContent.province
    );
    cy.get(element).click();
  }
);

Then(/^I click on confirm button at element \"([^\"]*)\"$/, function (element) {
  cy.get(element).click();
});

And(
  /^I validate the booking error message text at element \"([^\"]*)\"$/,
  function (element) {
    cy.get(element).should("include.text", constants.texts.bookingErrorMessage);
  }
);
