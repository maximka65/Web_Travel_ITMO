describe('Blog', () => {
  const user = (Math.random() + 1).toString(36).substring(7);
  let cookie;

  it('should register before login', () => {
    cy.visit('http://localhost:3000/register');

    cy.get("input[type='text']").type(user);
    cy.get("input[type='password']").type('admin');
    cy.get("input[type='submit']").click();
    cy.url().should('include', '/login');
  });

  it('should login before posting', () => {
    cy.visit('http://localhost:3000/login');

    cy.get("input[type='text']").type(user);
    cy.get("input[type='password']").type('admin');
    cy.get("input[type='submit']").click();
    cy.url().should('include', '/blog');
    cy.getCookie('access_tourist_token')
      .then((c) => {
        cookie = c.value;
      });
  });

  it('should create post', () => {
    cy.setCookie('access_tourist_token', cookie);
    cy.visit('http://localhost:3000/new_post');
    cy.get("input[name='title']").type('text');
    cy.get("input[name='content']").type('content');
    cy.get("input[type='submit']").click();

    cy.url().should('include', '/blog');
  });

  it('should test if post is created', () => {
    cy.setCookie('access_tourist_token', cookie);
    cy.visit('http://localhost:3000/blog');

    cy.get('.card-title').last().contains('text');
  });
});
