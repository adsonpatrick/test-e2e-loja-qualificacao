import { productElements } from "./productElements";

class Product {
    static accessProductMenu() {
        cy.get(productElements.randomProductHome).click()
        cy.url().should('include', 'product')
    }
    static copyLinkFromProduct() {
        cy.intercept({
            url: 'https://api2.amplitude.com/2/httpapi'
        }).as('copyLinkSuccess')
        cy.get(productElements.buttonCopyLink).click()
    }
    static copyLinkUrlValidation() {
        cy.wait('@copyLinkSuccess').its('response.statusCode').should('eq', 200)
    }
    static addProductToTheCart() {
        cy.intercept({
            url: 'https://api.ecommerce.nextar.com/api/v1/order/products-available-by-productid'
        }).as('productAdded')
        cy.get(productElements.buttonAddProductCart).click()
    }
    static productAddedUrlValidation() {
        cy.wait('@productAdded').its('response.statusCode').should('eq', 200)
    }
    static clickButtonShare() {
        cy.get(productElements.sharingButton).click()
    }
    static modalSharingValidation() {
        cy.get(productElements.modalSharing).should('be.visible')
    }
}
export default Product