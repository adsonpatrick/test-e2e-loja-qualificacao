import { checkoutElements } from "./checkoutElements";

class Checkout {
    static typeObservation(text) {
        cy.get(checkoutElements.areaOfObservations).type(text).should('have.value', text)
    }
    static clickButtonForward() {
        cy.get(checkoutElements.nextCheckoutButton).click()
    }
    static typeCEP(randomCEP) {
        cy.get(checkoutElements.insertCEP).type(randomCEP).should('have.value', randomCEP)
    }
    static typerNumber(randomNumber) {
        cy.get(checkoutElements.insertNumber).type(randomNumber).should('have.value', randomNumber)
    }
    static typerName(randomName) {
        cy.get(checkoutElements.insertName).type(randomName).should('have.value', randomName)
    }
    static typeEmail(randomEmail) {
        cy.get(checkoutElements.insertEmail).type(randomEmail).should('have.value', randomEmail)
    }
    static typeTelephoneNumber(randomTelephoneNumber) {
        cy.get(checkoutElements.insertTelephoneNumber).type(randomTelephoneNumber).should('have.value', randomTelephoneNumber)
    }
    static agreePoliticsPrivacy() {
        cy.get(checkoutElements.checkboxPrivacyPolicy).click()
    }
    static orderValidation() {
        cy.get(checkoutElements.textConfirmationRequest).contains('Pedido Feito!').should('be.visible')
    }
}
export default Checkout