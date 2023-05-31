import { randomNumber } from "../../../fixtures/dataUtils"

export const productElements = {
    randomProductHome: `:nth-child(${randomNumber}) > .list-product__grid-column__img__wrapper > .list-product__grid-column__img > img`,
    buttonCopyLink: '.product-detail__content__links__copy-link__desktop',
    buttonAddProductCart: '.product-detail__content > .product-detail__content__info > .ui',
    sharingButton: '.product-detail__content__links > :nth-child(2) > span',
    modalSharing: '.nex-share-modal__content'
}