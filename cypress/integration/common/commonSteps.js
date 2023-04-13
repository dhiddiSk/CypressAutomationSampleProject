/// <reference types="Cypress" />
import {
  Then,
  And,
  When,
  Given,
  But,
} from "cypress-cucumber-preprocessor/steps";
import UserLoginPage from "../../support/pageObjects/UserLoginPage";
import * as constants from "../../support/constants";
const loginPageObject = new UserLoginPage();

Given(/^I should be in the magnolia loginpage$/, function () {
  cy.visit(Cypress.config("baseUrl"), { failOnStatusCode: false });
});

Given(/^I should be in the magnolia homepage$/, function () {
  cy.visit(Cypress.config("baseUrl"), { failOnStatusCode: false });
  loginPageObject.login(
    constants.userCredentials.userName,
    constants.userCredentials.password
  );
  cy.get("button").eq(0).click();
});
