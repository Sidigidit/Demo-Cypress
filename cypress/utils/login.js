import { selectors } from "../selector/global";

export function login(user, password) {
    cy.get(selectors.loginPage.usernameInput).type(user);
    cy.get(selectors.loginPage.passwordInput).type(password);
    cy.get(selectors.loginPage.loginButton).click();
}