import { menuElements } from "./menuElements";

class Menu {
    static whatsAppLink() {
        cy.get(menuElements.whatsAppButton).should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=+5511999909111&text=Olá, vim do seu catálogo online')
    }
    static facebookLink() {
        cy.get(menuElements.facebookButton).should('have.attr', 'href', 'https://www.facebook.com/facebookQualificacao\n      ')
    }
    static instagramlLink() {
        cy.get(menuElements.instagramButton).should('have.attr', 'href', 'https://www.instagram.com/instagramQualificacao')
    }
    static emailLink() {
        cy.get(menuElements.emailButton).should('have.attr', 'href', 'mailto:contaqualificacaofree@nextar.com')
    }
    static mapsLink() {
        cy.get(menuElements.mapsButton).should('have.attr', 'href', 'https://maps.google.com/?q=%20R.%20Jos%C3%A9%20de%20Oliveira%20Franco%2C%2054321%2099%20-%20Bairro%20Alto%2C%20Curitiba%20-%20PR%2C%20BR%20')
    }
}
export default Menu