class LoginPage {
    getLoginInput() {
            return cy.get('#user_email');
    }
    getPasswordInput() {
            return cy.get('#user_password');
    }
    getLogInButton() {
            return cy.get('.css-1jphuq5');
    }

}
export default LoginPage;