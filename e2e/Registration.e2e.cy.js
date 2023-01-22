describe('Registration', () => {
  const user = (Math.random() + 1).toString(36).substring(7);

  it('should register', () => {
    cy.visit('http://localhost:3000/register');

    cy.get('input[type="text"]').type(user);
    cy.get('input[type="password"]').type('admin');
    cy.get('input[type="submit"]').click();
    cy.url().should('include', '/login');
  });

  it('should login as created user', () => {
    cy.visit('http://localhost:3000/login');

    cy.get('input[type="text"]').type(user);
    cy.get('input[type="password"]').type('admin');
    cy.get('input[type="submit"]').click();
    cy.url().should('include', '/blog');
  });
});
