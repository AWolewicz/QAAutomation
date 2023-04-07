/// <reference types="cypress" />

import LoginPage from "../pages/Login";
import HomePage from "../pages/HomePage";

describe('login to LMS', () => {

const loginPage = new LoginPage();
const homePage = new HomePage();


    beforeEach(() => {
      cy.visit('https://www.edu.goit.global/account/login')
    })
    
    it('login first user', () => {
     
        //Step 1
      loginPage.getLoginInput.type('user888@gmail.com');
      loginPage.getPasswordInput.type('1234567890');
      loginPage.getLogInButton.click();
      cy.pause();
      cy.log('Populate all fields.');

      //Step 2
      homePage.getUserMenu.click();
      homePage.getLogOutButton1.click();
      cy.log('Log out first user.');
    })
    
    it('login second user', () => {

        //Step 1
      loginPage.getLoginInput.type('testowyqa@qa.team');
      loginPage.getPasswordInput.type('QA!automation-1');
      loginPage.getLogInButton.click();
      cy.pause();
      cy.log('Populate all fields.');

        //Step 2
      homePage.getUserMenu.click();
      homePage.getLogOutButton2.click();
      cy.log('Log out second user.');
    })
  })