/// <reference types="Cypress" />
import {
  Then,
} from "cypress-cucumber-preprocessor/steps";
import * as constants from "../../support/constants";

Then(
  /^I click on the German language button at element \"([^\"]*)\" indexed at \"([^\"]*)\" and validate the network request$/,
  function (element, index) {
    const germanLanguageUrl = `${Cypress.config("baseUrl") + Cypress.env("germalLanguageUrl")}`;
    cy.intercept({ method: "GET", url: germanLanguageUrl }).as("userLanguageChange");
    cy.get(element).eq(index).click();
    cy.wait("@userLanguageChange").then(({ response }) => {
      const { statusCode } = response;
      const pattern = /[2][0-9][0-9]/;
      const matching = statusCode.toString().match(pattern);
      expect(statusCode.toString()).to.eq(matching[0]);
    });
  }
);

Then(/^I validate the German content$/, function () {
  cy.get(".container .carousel-link .carousel-caption h1").should(
    "include.text",
    constants.GermanLanguageContent.homepageText
  );
  cy.get("a[href='/travel/de/members.html']").should(
    "have.text",
    constants.GermanLanguageContent.members
  );
  cy.get("a[href='/travel/de/contact.html']").should(
    "include.text",
    constants.GermanLanguageContent.contact
  );
  cy.get("a[href='/travel/de/about.html']").should(
    "include.text",
    constants.GermanLanguageContent.about
  );
  cy.get("a[href='/travel/de/members/login.html?mgnlLogout=true']").should(
    "have.text",
    constants.GermanLanguageContent.logout
  );
});

Then(
  /^I click on the English language button at element \"([^\"]*)\" indexed at \"([^\"]*)\"$/,
  function (element, index) {
    cy.get(element).eq(index).click();
  }
);

Then(/^I validate the English content$/, function () {
  cy.get(".container .carousel-link .carousel-caption h1").should(
    "include.text",
    constants.EnglishLanguageContent.homepageText
  );
  cy.get("a[href='/travel/members.html']").should(
    "have.text",
    constants.EnglishLanguageContent.members
  );
  cy.get("a[href='/travel/contact.html']").should(
    "include.text",
    constants.EnglishLanguageContent.contact
  );
  cy.get("a[href='/travel/about.html']").should(
    "include.text",
    constants.EnglishLanguageContent.about
  );
  cy.get("a[href='/travel/members/login.html?mgnlLogout=true']").should(
    "have.text",
    constants.EnglishLanguageContent.logout
  );
});
