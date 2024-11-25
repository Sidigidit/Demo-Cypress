import { login } from "../utils/login";
import { selectors } from "../selector/global";
import json from '../fixtures/example.json'

describe('Login Scenario', () => {
    // beforeEach(() => {
    //     cy.visit(json.baseUrl, { timeout: 5000 });
    //     cy.reload();
    // });
  
    it('should login successfully with valid credentials', () => {
        cy.visit(json.baseUrl);
        login(selectors.loginPage.usernameInput, selectors.loginPage.passwordInput);
    //   cy.get(selectors.loginPage.usernameInput).type('standard_user');
    //   cy.get('[data-test="password"]').type('secret_sauce');
    //   cy.get('[data-test="login-button"]').click();
  
        // cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain', 'Products');
    });
  
    it('should show an error with invalid credentials', () => {
        cy.visit(json.baseUrl, { timeout: 5000 });
        login(selectors.loginPage.usernameInput, 'wrongPassword');
    //   cy.get('[data-test="username"]').type('invalid_user');
    //   cy.get('[data-test="password"]').type('wrong_password');
    //   cy.get('[data-test="login-button"]').click();
  
        cy.get('.error-message-container').should('be.visible');
    });
  });
  