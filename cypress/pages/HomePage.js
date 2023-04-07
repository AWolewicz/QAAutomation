class HomePage {
    getUserMenu() {
        return cy.get('#open-navigation-menu-mobile');
    }
    
    getLogOutButton1() {
        return cy.get(':nth-child(9) > .css-bve2vl');
    }

    getLogOutButton2() {
        return cy.get(':nth-child(7) > .css-bve2vl');
    }
}
export default HomePage;