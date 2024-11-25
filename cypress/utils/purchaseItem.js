import { selectors } from "../selector/global";

export function purchaseItem() {
    cy.get('.shopping_cart_link').click();
    cy.get('.checkout_button').click();
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('.continue_button').click();
    cy.get('.finish_button').click();
  }
  