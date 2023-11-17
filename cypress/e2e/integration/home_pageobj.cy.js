///<reference types="cypress" />

export class homePageObj{

    elProductCard = ".mat-card"
    elProductCard2 = ".mat-card-content"
    elProductCard3 = ".mat-focus-indicator"
    elSuccessAddtoCart = ".mat-snack-bar-container"
    elCounterCart = "span[id='mat-badge-content-0']"

    addProducttoCart(numberofitem){
        for(let i = 0; i < numberofitem; i++){
            cy.get(this.elProductCard)
            .eq(i)
            .find(this.elProductCard2)
            .find(this.elProductCard3)
            .click()
        }
    }

    expectedShowAlertSuccessAddtoCart(){
        cy.get(this.elSuccessAddtoCart)
        .should('be.visible')
        .and('contain.text','One Item added to cart')
    }
    
    expectedCounterIncrease(valcounter){
        cy.get(this.elCounterCart)
        .should('contain.text',valcounter)
    }

    expectedCounterIncreasetoMax(numberofitem){
        cy.get(this.elCounterCart)
        .should('contain.text',numberofitem)
    }

}