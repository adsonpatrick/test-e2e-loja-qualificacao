import { searcherElements } from "./searcherElements";

class Searcher {
    static searchProduct(product) {
        cy.get(searcherElements.searchInput).wait(1000).type(product, { delay: 100 })
    }
    static validateSearchedProduct(product) {
        cy.get(searcherElements.productFound).should('have.attr', 'alt', product)
    }
}
export default Searcher