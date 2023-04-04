/// <reference types="cypress" />


describe('login to LMS', () => {
  beforeEach(() => {
    cy.visit('https://www.edu.goit.global/account/login')
  })
  it('login first user', () => {
    cy.get('#user_email').type('user888@gmail.com');
    cy.get('#user_password').type('1234567890');
    cy.get('.css-1jphuq5').click();
    cy.pause();
    cy.get('#open-navigation-menu-mobile').click();
    cy.get(':nth-child(9) > .css-bve2vl').click();
  })
  it('login second user', () => {
    cy.get('#user_email').type('testowyqa@qa.team');
    cy.get('#user_password').type('QA!automation-1');
    cy.get('.css-1jphuq5').click();
    cy.pause();
    cy.get('#open-navigation-menu-mobile').click();
    cy.get(':nth-child(7) > .css-bve2vl').click();
  })
})