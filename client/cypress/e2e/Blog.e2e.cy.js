describe('Blog', () => {
  const user = (Math.random() + 1).toString(36).substring(7);
  let cookie;

  it('should register and login', () => {
    cy.visit('http://localhost:3005/register');

    cy.get("input[type='text']").type(user);
    cy.get("input[type='email']").type(user + '@mail.ru');
    cy.get("input[type='password']").type('admin');
    cy.get("input[type='submit']").click();
    cy.url().should('include', '/login');

    cy.visit('http://localhost:3005/login');
    cy.get("input[type='text']").type(user);
    cy.get("input[type='password']").type('admin');
    cy.get("input[type='submit']").click();
    cy.url().should('include', '/blog');
    cy.getCookie('access_tourist_token').then((c) => {
      cookie = c.value;
    });
  });

  it('should create post', () => {
    cy.setCookie('access_tourist_token', cookie);
    cy.visit('http://localhost:3005/new_post');
    cy.get("input[name='title']").type('text');
    cy.get("input[name='content']").type('content');
    cy.get("input[type='submit']").click();

    cy.url().should('include', '/blog');
  });

  it('should test if post is created', () => {
    cy.setCookie('access_tourist_token', cookie);
    cy.visit('http://localhost:3005/blog');

    cy.get('.card-title').last().contains('text');
  });
});
