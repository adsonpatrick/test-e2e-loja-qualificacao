import { randomNumber } from "../../../fixtures/dataUtils"

export const homeElements = {
    buttonAddProduct: `:nth-child(${randomNumber}) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .nex-icon-plus`,
    quantityAdded: `:nth-child(${randomNumber}) > .list-product__grid-column__info > .list-product__grid-column__div-section > :nth-child(2) > .amount-input > .amount-input__value`,
    buttonGrid: '.column > a',
    buttonCart: '.checkout-button',
    modalCart: '.cart-container'
}