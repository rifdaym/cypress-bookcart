///<reference types="cypress" />

export class headerPageObj{
    menuCart = "button[class='mat-focus-indicator mat-icon-button mat-button-base']";
    counterCart = "span[id='mat-badge-content-0']"
    menuLogin = "button[class='mat-focus-indicator mat-button mat-button-base ng-star-inserted']"

    clickCart(){
        cy.get(this.menuCart)
    }

    precondUnauthorizedUser(){
        cy.get(this.menuLogin).contains('Login')
    }

    precondCounterCartZero(valcounter){
        cy.get(this.counterCart).contains(valcounter)
    }


}