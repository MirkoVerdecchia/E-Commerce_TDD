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

  it('shows the LOGIN page', () => {
    cy.get('.button4').click();
    cy.get('body > app-root > app-login');
  });

  it('shows ALL the page', () => {
    cy.get('.button2').click();
    cy.get('body > app-root > app-product-list');

    cy.get('.button3').click();
    cy.get('body > app-root > app-order');

    cy.get('.button1').click();
    cy.get('body > app-root > app-home');

    cy.get('.button4').click();
    cy.get('body > app-root > app-login');

  });

  it('shows product list', () => {
    cy.get('.button2').click();
    cy.get('.button1').click();

    cy.get('.button2').click();

    cy.get('body > app-root > app-product-list > div > div').should(
      'have.length',
      '6'
    );
  });

  it('should add product from the list to the cart and show it', () => {
    cy.get('.button2').click();
    cy.get('.button1').click();
    cy.get('.button2').click();

    cy.get('.button').click({ multiple: true });

    cy.get('.button3').click();

    cy.get('body > app-root > app-order > div > div').should(
      'have.length',
      '6'
    );
  });

  it('should remove product from the cart', () => {
    cy.get('.button2').click();
    cy.get('.button1').click();
    cy.get('.button2').click();

    cy.get('.button').click({ multiple: true });

    cy.get('.button3').click();

    cy.get('body > app-root > app-order > div > div').should(
      'have.length',
      '6'
    );

    cy.get('.button3').click();
    cy.get('.removeButton').click({ multiple: true });
    cy.get('body > app-root > app-order > div > div').should(
      'have.length',
      '0'
    );
  });

  it('shows input text fields in order page', () => {
    cy.get('.button3').click();

    cy.get('.phone');
    cy.get('.city');
    cy.get('.address');
  });

  it('shows input text fields in login page', () => {
    cy.get('.button4').click();

    cy.get(
      'body > app-root > app-login > div > div > input[type=text]:nth-child(1)'
    );
    cy.get(
      'body > app-root > app-login > div > div > input[type=text]:nth-child(2)'
    );
  });
});

describe('Mobile App Testing', () => {
  beforeEach(() => {});
});
