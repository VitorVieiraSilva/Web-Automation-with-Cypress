describe('Login', () => {
  const email = 'vitorsilva@newtest.com'
  before(() => {
    cy.createUserViaAPI('Vitor Silva', email, Cypress.env('password'))
  })
  context('Testes positivos', () => {
    beforeEach(() => {
      cy.visit('https://automationexercise.com/')
    })
    it('login with valid user', () => {
      cy.contains('Signup / Login').click()
      cy.get('[data-qa="login-email"]').type(email)
      cy.get('[data-qa="login-password"]').type(Cypress.env('password'))
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
  })

    after(() => {
    cy.deleteUserViaApi(email,Cypress.env('password')).then((response) => {
      cy.log('Delete user response:', response)
      expect(response.status).to.eq(200);
    });
  })
})