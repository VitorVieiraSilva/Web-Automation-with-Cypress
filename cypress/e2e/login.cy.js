describe('Login', () => {
  before(() => {
    cy.createUserViaAPI().then((response) => {
      expect(response.status).to.eq(200);
    })
  })
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  })
  it('login with valid user', () => {
    cy.contains('Signup / Login').click()
    cy.get('[data-qa="login-email"]').type('vitorsilva@test.com')
    cy.get('[data-qa="login-password"]').type('@Test2025')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as Vitor').should('be.visible')
  })
  it('login with invalid user', () => {
    cy.contains('Signup / Login').click()
    cy.get('[data-qa="login-email"]').type('vitorsilva@inexistent.com')
    cy.get('[data-qa="login-password"]').type('invalidpassword')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })
  after(() => {
    const email = 'vitorsilva@test.com'
    const password = '@Test2025'
    cy.deleteUserViaApi(email, password).then((response) => {
      expect(response.status).to.eq(200);
    });
  })
})