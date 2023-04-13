/// <reference types="Cypress" />
import {
  Then,
  And
} from "cypress-cucumber-preprocessor/steps";
import * as constants from "../../support/constants";

Then(/^I click on the \"([^\"]*)\" index navigation bar$/, function (item) {
  switch (item) {
    case "tours":
      cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(1)").click();
      break;
    case "destinations":
      cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(2)").click();
      break;
    case "stories":
      cy.get("a[href='/travel/stories.html']").click();
      break;
    case "about":
      cy.get("a[href='/travel/about.html']").eq(0).click();
      break;
    case "contact":
      cy.get("a[href='/travel/contact.html']").eq(0).click();
      break;
    case "members":
      cy.get("a[href='/travel/members.html']").click();
      break;
    default:
      cy.log("The selected navigation button is not available");
  }
});

Then(
  /^I validate if all the \"([^\"]*)\" buttons are visible$/,
  function (item) {
    switch (item) {
      case "tours":
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
        break;
      case "destinations":
        cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(2) li").each(
          ($el, index, $list) => {
            // write an assertion saying the element contains that particular text
            cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(2) li")
              .eq(index)
              .should(
                "contain.text",
                constants.navigationDropdownElements.destinations[index]
              );
          }
        );
    }
  }
);

And(
  /^I click on the \"([^\"]*)\" dropdown buttons and validate user landing webpage$/,
  function (itemDropdowns) {
    switch (itemDropdowns) {
      case "destinations":
        cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(2) li").each(
          ($el, index, $list) => {
            cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(2) li")
              .eq(index)
              .click();
            cy.url().should(
              "include",
              constants.navigationDropdownElements.destinationsUrl[index]
            );
            cy.get(
              ".navbar-right .nav.navbar-nav .dropdown:nth-child(2)"
            ).click();
          }
        );
        break;
      case "tours":
        cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(1) li").each(
          ($el, index, $list) => {
            cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(1) li")
              .eq(index)
              .click();
            cy.url().should(
              "include",
              constants.navigationDropdownElements.toursUrl[index]
            );
            cy.get(
              ".navbar-right .nav.navbar-nav .dropdown:nth-child(1)"
            ).click();
          }
        );
    }
  }
);

And(/^I validate user landing webpage of \"([^\"]*)\" index$/, function (item) {
  switch (item) {
    case "stories":
      cy.url().should(
        "include",
        constants.navigationDropdownElements.storiesUrl
      );
      cy.get(".stories-header h1").contains(constants.texts.storiespageText);
      break;
    case "about":
      cy.url().should("include", constants.navigationDropdownElements.aboutUrl);
      cy.get(".jumbotron h2").contains(constants.texts.aboutpageText);
      break;
    case "contact":
      cy.url().should(
        "include",
        constants.navigationDropdownElements.contactUrl
      );
      cy.get(".jumbotron h2").contains(constants.texts.contactpageText);
      break;
    case "members":
      cy.url().should(
        "include",
        constants.navigationDropdownElements.membersUrl
      );
      cy.get(".jumbotron h2").contains(constants.texts.memberspageText);
      break;
    default:
      cy.log("The selected navigation button is not available");
  }
});
