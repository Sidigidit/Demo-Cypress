import { selectors } from "../selector/global";

export function deleteItem(index) {
    cy.get('.inventory_item').eq(index).find('.delete-button').click();
  }
  