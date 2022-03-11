describe('Nautes E-Commerce e2e Testing', () => {

  beforeEach(() => {
      cy.visit('/');

  });

  it('shows the LANDING page', () => {
      cy.visit('/');
      cy.contains('NEW E-COMMERCE!!');
  });

  it('shows the PRODUCT_LIST page', () => {

      cy.get('.button2').click();
      cy.get('body > app-root > app-product-list');

  });
  
  it('shows the ORDER page', () => {
      cy.get('.button3').click();
      cy.get('body > app-root > app-order');
  });

  it('shows ALL the page', () => {

      cy.get('.button2').click();
      cy.get('body > app-root > app-product-list');

      cy.get('.button3').click();
      cy.get('body > app-root > app-order');

      cy.get('.button1').click();
      cy.get('body > app-root > app-home');

  });
  
  // it('shows product list', () => {
  //     cy.get('.button2').click();
  //     cy.get('body > app-root > app-product-list > div > div').should('have.length', '1');
  // });

  // it('should add product from the list to the cart and show it', () => {

  // cy.get('.button2').click();
  // cy.get('.button').click();
  // cy.get('.button3').click();
  // cy.get('body > app-root > app-order > div > div').should('have.length', '1');

  // });

  it('shows input text fields', () => {

      cy.get('.button3').click();

      cy.get('.phone');
      cy.get('.city');
      cy.get('.address');

  });

});

describe('Mobile App Testing', () => {


  beforeEach(() => {
      
  });


});
