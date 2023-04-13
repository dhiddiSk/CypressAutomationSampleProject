/// <reference types="Cypress" />
import {
  Then
} from "cypress-cucumber-preprocessor/steps";

Then(
  /^I enter \"([^\"]*)\" in the seach box at element \"([^\"]*)\" and press enter, I should see atleast three results.$/,
  function (text, element) {
    cy.get(element).type(`${text}{enter}`);
    cy.get(".list-group-item").should("have.length.at.least", 3);
  }
);

Then(
  /^I click on the first seach result page and validate user landing webpage$/,
  function () {
    const carrerUrl = `${Cypress.config("baseUrl") + Cypress.env("carrersUrl")}`;
    cy.intercept({ method: "GET", url: carrerUrl }).as("career");
    cy.get("a[href='/travel/about/careers.html']").click({ force: true });
    cy.wait("@career").then(({ response }) => {
      const { statusCode } = response;
      const pattern = /[2][0-9][0-9]/;
      const matching = statusCode.toString().match(pattern);
      expect(statusCode.toString()).to.eq(matching[0]);
    });
    cy.get("body").should("be.visible");
  }
);
