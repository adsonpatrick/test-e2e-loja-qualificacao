const faker = require('faker-br')
import { productRandom, randomCEP } from "../fixtures/dataUtils";
import Checkout from "../support/pages/checkout/checkout";
import Home from "../support/pages/home/home";
import Menu from "../support/pages/menu/menu"
import Product from "../support/pages/product/product";
import Searcher from "../support/pages/searcher/searcher";

//**********************************************************************
// Olá, conforme foi definido no Desafio Tech agrupei os 5 testes em
// uma única suíte de testes, normalmente eu separo as suítes por
// páginas ou funcionalidades para o código ficar mais legível e 
// organizado mas me adequei as recomendações do Desafio.
// Neste projeto usei o padrão Mocha (describe, context e it) para
// organizar os testes e o design pattern Page Object, também já deixei
// mapeado elementos para futuras aplicações de outros cenários de teste.
//***********************************************************************

describe("SUITE DE TESTES DA LOJA QUALIFICAÇÃO", () => {
    beforeEach(() => {
        cy.visit('/lojaqualificacao')
    })

// No primeiro cenário de teste eu validei a busca de um produto, eu criei
// uma massa de teste no dataUtils com todos os 30 produtos cadastrados
// e criei uma lógica para trazer um produto aleatóriamente.

    context('TESTE 1 - FLUXO BUSCADOR GLOBAL', () => {
        it('Espera que busque o produto digitado', () => {
            Searcher.searchProduct(productRandom)
            Searcher.validateSearchedProduct(productRandom)
        })
    })

// No segundo cenário de teste eu validei os links do menu lateral, 
// a princípio meu intuito era entrar em cada link externo mas isso  
// estava quebrando o teste pois abria uma nova janela, consegui 
// contornar criando uma lógica para abrir na própria janela, mas  
// tive um problema de permissionamento no cypress para poder retornar 
// a página anterior, por fim mudei o intuito da validação para 
// atestar que os links do "Fale Conosco" realmente são os links
// esperados.

    context('TESTE 2 - FLUXO DO MENU LATERAL', () => {
        it('Espera que valide os links do menu lateral', () => {
            Menu.whatsAppLink()
            Menu.facebookLink()
            Menu.instagramlLink()
            Menu.emailLink()
            Menu.mapsLink()
        })
    })

// No terceiro cenário de teste validei a tela de um produto, criei uma 
// lógica para clicar em um produto aleatório e dentro desse produto
// validar que a função de adicionar à sacola está atuando corretamente,
// também foi necessário colocar um wait e delay na digitação pois o teste
// estava quebrando devido a velocidade ao digitar o nome do produto.

    context('TESTE 3 - FLUXO TELA DO PRODUTO', () => {
        it('Espera que adicione um produto à sacola de compras pela página do produto', () => {
            Product.accessProductMenu()
            Product.addProductToTheCart()
            Product.productAddedUrlValidation()
        })
    })

// No quarto cenário de teste validei a tela de home, criei uma lógica para 
// adicionar aleatóriamente um produto da tela de home á sacola de compras.

    context('TESTE 4 - FLUXO TELA DE HOME', () => {
        it('Espera que adicione o produto à sacola de compras pela página de home', () => {
            Home.addProductToTheCart()
            Home.validationProductsQuantityAdd()
        })
    })

// No quinto cenário de teste validei o fluxo completo de compra de um produto.
// Utilizei uma lógica para adicionar aleatóriamente um produto ao carrinho,
// depois utilizei a bibliteca faker-br para preencher os dados de compra de
// forma aleatória e validei no final se o pedido foi enviado com sucesso.

    context('TESTE 5 - FLUXO DO CHECKOUT', () => {
        it('Espera que valide a compra de um produto', () => {
            const text = faker.lorem.sentence()
            const randomNumber = faker.random.number()
            const randomName = faker.name.firstName()
            const randomEmail = faker.internet.email()
            const randomTelephoneNumber = faker.phone.phoneNumber("71#########")
    
            Home.addProductToTheCart()
            Home.accessCart()
            Checkout.typeObservation(text)
            Checkout.clickButtonForward()
            Checkout.typeCEP(randomCEP)
            Checkout.typerNumber(randomNumber)
            Checkout.clickButtonForward()
            Checkout.typerName(randomName)
            Checkout.typeEmail(randomEmail)
            Checkout.typeTelephoneNumber(randomTelephoneNumber)
            Checkout.agreePoliticsPrivacy()
            Checkout.clickButtonForward()
            Checkout.orderValidation()
        })
    })
})
