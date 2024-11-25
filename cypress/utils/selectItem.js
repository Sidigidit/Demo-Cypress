import { selectors } from "../selector/global";

export function selectRandomItem(index) {
    cy.get('.inventory_item').eq(index).click();
  }
  