
Cypress.Commands.add('createUserViaAPI', (name,email,password) => {
    const data = {
    name: name,
    email: email,
    password: password,
    title: 'Mr',
    birth_date: '10',
    birth_month: '5',
    birth_year: '1990',
    firstname: 'Vitor',
    lastname: 'Silva',
    company: 'Test Company',
    address1: '123 Test St',
    address2: 'Suite 456',
    country: 'Canada',
    state: 'Test State',
    city: 'Test City',
    zipcode: 'A1B 2C3',
    mobile_number: '+1234567890'
} 
    cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/createAccount',
        form: true,
        body: data
    }).then((response) => {
        console.log('Create User Response:', response);
        return response;
    });
});

Cypress.Commands.add('deleteUserViaApi', (email, password) => {
    cy.request({
        method: 'DELETE',
        url: 'https://automationexercise.com/api/deleteAccount',
        form: true,
        body: { email: email, password: password }
    }).then((response) => {
        return response;
    });
});

Cypress.Commands.add('fillCompleteForm', (email) => {
    const data = {
    firstName: 'Vitor',
    lastName: 'Silva',
    email: email,
    password: '@Test2025',
    day: '10',
    month: 'May',
    year: '1990',
    company: 'Test Company',
    address1: '123 Test St',
    address2: 'Suite 456',
    country: 'Canada',
    state: 'Test State',
    city: 'Test City',
    zipcode: 'A1B 2C3',
    mobileNumber: '+1234567890'
    }

    cy.get('#id_gender1').check()
    cy.get('[data-qa="password"]').type(data.password)
    cy.get('[data-qa="days"]').select(data.day)
    cy.get('[data-qa="months"]').select(data.month)
    cy.get('[data-qa="years"]').select(data.year)
    cy.get('[data-qa="first_name"]').type(data.firstName)
    cy.get('[data-qa="last_name"]').type(data.lastName)
    cy.get('[data-qa="company"]').type(data.company)
    cy.get('[data-qa="address"]').type(data.address1)
    cy.get('[data-qa="address2"]').type(data.address2)
    cy.get('[data-qa="country"]').select(data.country)
    cy.get('[data-qa="state"]').type(data.state)
    cy.get('[data-qa="city"]').type(data.city)
    cy.get('[data-qa="zipcode"]').type(data.zipcode)
    cy.get('[data-qa="mobile_number"]').type(data.mobileNumber)

});