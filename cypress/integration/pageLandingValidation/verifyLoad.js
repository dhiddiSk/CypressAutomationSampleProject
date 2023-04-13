/// <reference types="Cypress" />
import UserLoginPage from "../../support/pageObjects/UserLoginPage";
import * as constants from "../../support/constants";

import {
  Then,
  And
} from "cypress-cucumber-preprocessor/steps";
const loginPageObject = new UserLoginPage();

Then(
  /^I enter login userName \"([^\"]*)\" and password \"([^\"]*)\"$/,
  function (username, password) {
    loginPageObject.login(username, password);
  }
);

And(
  /^I click on login button at element \"([^\"]*)\" indexed at \"([^\"]*)\"$/,
  function (element, index) {
    const loginUrl = `${Cypress.config("baseUrl")}`;
    // Click on the login button
    cy.get(element).eq(index).click();
  }
);

And(/^I should be in the magnoliaHomePage$/, function () {
  cy.get(
    ".carousel.slide .carousel-inner .item.active .carousel-caption h1"
  ).contains(constants.texts.homepageText);
  cy.url().should("include", constants.navigationDropdownElements.homepageUrl);
  cy.get("body").should("be.visible");
});
