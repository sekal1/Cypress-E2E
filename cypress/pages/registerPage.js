export class registerPage{
    locators={
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        confirmPassword:'#input-confirm',
        policyCheckBox:'input[type="checkbox"]',
        continueButton: 'input[type="submit"]'
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(fName){
        cy.get(this.locators.firstName).type(fName)
        return this;
    }

    enterLastName(lName){
        cy.get(this.locators.lastName).type(lName)
        return this;
    }

    enterEmail(email){
        cy.get(this.locators.email).type(email)
        return this;
    }

    enterTelephone(phone){
        cy.get(this.locators.telephone).type(phone)
        return this;
    }

    enterPassword(password){
        cy.get(this.locators.password).type(password)
        cy.get(this.locators.confirmPassword).type(password)
        return this;
    }

    selectCheckBox(){
        cy.get(this.locators.policyCheckBox).check()
        return this;
    }

    clickContinueButton(){
        cy.get(this.locators.continueButton).click()
        return this;
    }
}