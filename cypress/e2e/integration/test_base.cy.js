///<reference types="cypress"/>

export class TestBase{

  mainUrl = "https://bookcart.azurewebsites.net/";

  navigateMainUrl(){
    cy.visit(this.mainUrl)
  }

}
