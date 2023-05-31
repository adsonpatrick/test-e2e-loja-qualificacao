import { homeElements } from "./homeElements";

function performClick(quantityCliced, quantityMaximum) {
    if (quantityCliced <= quantityMaximum) {
        cy.get(homeElements.buttonAddProduct)
            .click()
            .then(() => {
                performValidation(quantityCliced)
                performClick(quantityCliced + 1, quantityMaximum)
            });
    }
}

function performValidation(quantityCliced) {
    cy.get(homeElements.quantityAdded)
        .should('have.attr', 'value', quantityCliced.toString())
}

class Home {
    static addProductToTheCart() {
        const maximumAttributeQuantity = 2
        performClick(1, maximumAttributeQuantity)
    }

    static validationProductsQuantityAdd() {
        const maximumAttributeQuantity = 2
        performValidation(maximumAttributeQuantity)
    }

    static changeToList() {
        cy.get(homeElements.buttonGrid).click()
    }

    static validationChangeToList() {
        cy.get(homeElements.buttonGrid).should('have.text', 'Lista')
    }

    static accessCart() {
        cy.get(homeElements.buttonCart).click()
    }

    static validationModalCart() {
        cy.get(homeElements.modalCart).should('be.visible')
    }
}

export default Home
