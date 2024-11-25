import { selectRandomItem } from '../utils/selectItem';
import { deleteItem } from '../utils/deleteItem';
import { purchaseItem } from '../utils/purchaseItem';
import { selectors } from '../selector/global';
import jsonData from '../fixtures/example.json'

describe('Select, Delete and Purchase Item', () => {
  
  beforeEach(() => {
    cy.visit(jsonData.baseUrl);
  });

  it('should log in successfully with valid credentials', () => {
    cy.get(selectors.loginPage.usernameInput).type('standard_user');
    cy.get(selectors.loginPage.passwordInput).type('secret_sauce');
    cy.get(selectors.loginPage.loginButton).click();
  });

  it('should randomly select an item and add it to the cart', () => {
    cy.get(selectors.inventoryPage.itemList).its('length').then((length) => {
      const randomIndex = Math.floor(Math.random() * length);
      selectRandomItem(randomIndex);
    });
  });

  it('should delete an item from the inventory', () => {
    cy.get(selectors.inventoryPage.itemList).its('length').then((length) => {
      const randomIndex = Math.floor(Math.random() * length);
      deleteItem(randomIndex);
    });
  });

  it('should purchase an item', () => {
    cy.get(selectors.inventoryPage.itemList).first().click();
    purchaseItem();
    cy.url().should('include', '/checkout-complete');
  });
});
