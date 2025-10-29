describe('Signup spec', () => {
  beforeEach(() => {
  cy.visit('https://automationexercise.com/')
})
  it('create new user', () => {
    cy.contains('Signup / Login').click()
    cy.get('[data-qa="signup-name"]').type('Vitor')
    cy.get('[data-qa="signup-email"]').type('vitorsilva@test.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.fillCompleteForm()
    cy.get('[data-qa="create-account"]').click()
    cy.contains('Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()

    cy.contains('Logged in as Vitor').should('be.visible')
  })
  afterEach(() => {
  cy.contains('a', 'Delete Account').click()
  cy.contains('Account Deleted!').should('be.visible')
})
})