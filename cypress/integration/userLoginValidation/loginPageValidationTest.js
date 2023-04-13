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

Then(
  /^I should see warning message \"([^\"]*)\" at element \"([^\"]*)\"$/,
  function (errorMessage, element) {
    cy.get(element).contains(constants.texts[errorMessage]);
  }
);

And(
  /^I click on \"([^\"]*)\" at element \"([^\"]*)\", indexed at \"([^\"]*)\"$/,
  function (login, element, index) {
    cy.get(element).eq(index).click();
  }
);

And(/^I should be in the magnoliaHomePage$/, function () {
  cy.get(
    ".carousel.slide .carousel-inner .item.active .carousel-caption h1"
  ).contains(constants.texts.homepageText);
  cy.url().should("include", constants.navigationDropdownElements.homepageUrl);
});

And(
  /^I click on login button at element \"([^\"]*)\" indexed at \"([^\"]*)\" with the \"([^\"]*)\" network request validations$/,
  function (element, index, status) {
    const loginUrl = `${Cypress.config("baseUrl")}`;

    switch (status) {
      case "success":
        cy.intercept({ method: "GET", url: loginUrl }).as("userLogin");
        // Click on the login button
        cy.get(element).eq(index).click();
        cy.wait("@userLogin").then(({ response }) => {
          const { statusCode } = response;
          const pattern = /[2][0-9][0-9]/;
          const matching = statusCode.toString().match(pattern);
          expect(statusCode.toString()).to.eq(matching[0]);
        });
        break;

      case "failure":
        cy.intercept({ method: "POST", url: loginUrl }).as("userLogin");
        // Click on the login button
        cy.get(element).eq(index).click();
        cy.wait("@userLogin").then(({ response }) => {
          const { statusCode } = response;
          const pattern = /[4][0-9][0-9]/;
          const matching = statusCode.toString().match(pattern);
          expect(statusCode.toString()).to.eq(matching[0]);
        });
        break;
    }
  }
);
