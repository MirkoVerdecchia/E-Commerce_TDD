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
    cy.get('.email').type('admin@gmail.it');
    cy.get('.password').type('123');
    cy.get('.buttonLog').click();
    cy.get('.button3').click();
    cy.get('body > app-root > app-order');
  });

  it('shows the LOGIN page', () => {
    cy.get('.button4').click();
    cy.get('body > app-root > app-login');
  });

  it('should admin log and navigate to the admin page', () => {
    cy.get('.button4').click();
    cy.get('.email').type('admin@gmail.it');
    cy.get('.password').type('123');
    cy.get('.buttonLog').click();
    cy.get('body > app-root > app-admin');
  });

  it('should user log and navigate to the user page', () => {
    cy.get('.button4').click();
    cy.get('.email').type('user@gmail.it');
    cy.get('.password').type('123');
    cy.get('.buttonLog').click();
    cy.get('body > app-root > app-account');
  });

  it('shows ALL the page', () => {
    cy.get('.button2').click();
    cy.get('body > app-root > app-product-list');

    cy.get('.button3').click();
    cy.get('.email').type('admin@gmail.it');
    cy.get('.password').type('123');
    cy.get('.buttonLog').click();
    cy.get('.button3').click();
    cy.get('body > app-root > app-order');

    cy.get('.button1').click();
    cy.get('body > app-root > app-home');

  });

  it('shows product list', () => {
    cy.get('.button2').click();
    cy.get('.button1').click();

    cy.get('.button2').click();

    cy.get('body > app-root > app-product-list > div > div').should('have.length','6');
  });

  it('should add product from the list to the cart and show it', () => {
    cy.get('.button2').click();
    cy.get('.button1').click();
    cy.get('.button2').click();

    cy.get('.button').click({ multiple: true });

    cy.get('.button3').click();
    cy.get('.email').type('admin@gmail.it');
    cy.get('.password').type('123');
    cy.get('.buttonLog').click();
    cy.get('.button3').click();

    cy.get('body > app-root > app-order > div > div').should('have.length','6');
  });

  it('should remove product from the cart', () => {
    cy.get('.button2').click();
    cy.get('.button1').click();
    cy.get('.button2').click();

    cy.get('.button').click({ multiple: true });

    cy.get('.button3').click();
    cy.get('.email').type('admin@gmail.it');
    cy.get('.password').type('123');
    cy.get('.buttonLog').click();
    cy.get('.button3').click();

    cy.get('body > app-root > app-order > div > div').should('have.length','6');

    cy.get('.button3').click();
    cy.get('.removeButton').click({ multiple: true });
    cy.get('body > app-root > app-order > div > div').should('have.length','0');
  });

  it('shows input text fields in order page', () => {
    cy.get('.button3').click();
    cy.get('.email').type('admin@gmail.it');
    cy.get('.password').type('123');
    cy.get('.buttonLog').click();
    cy.get('.button3').click();

    cy.get('.phone');
    cy.get('.city');
    cy.get('.address');
  });

  it('shows input text fields in login page', () => {
    cy.get('.button4').click();

    cy.get('body > app-root > app-login > div > div > input[type=text]:nth-child(1)');
    cy.get('body > app-root > app-login > div > div > input[type=text]:nth-child(2)');
  });

  it('should the admin create a new product and delete it', () => {
    //access to admin page
    cy.get('.button4').click();
    cy.get('.email').type('admin@gmail.it');
    cy.get('.password').type('123');
    cy.get('.buttonLog').click();

    //create the product
    cy.get('.nameI').type('Cypress test');
    cy.get('.priceI').type('10');
    cy.get('.descriptionI').type('Cypress description test');
    cy.get('.buttonCreate').click();

    //search the product just create
    cy.get('body > app-root > app-admin > ul > div:nth-child(8)');

    //delete the product
    cy.get('body > app-root > app-admin > ul > div:nth-child(8) > td:nth-child(5) > button').click();

    //check if the product is deleted
    cy.get('body > app-root > app-admin > ul > div:nth-child(8)').should('not.exist');
  });
});

describe('Mobile App Testing', () => {
  beforeEach(() => {});
});
