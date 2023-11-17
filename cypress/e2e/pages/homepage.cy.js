///<reference types="cypress" /> 

import { headerPageObj } from "../integration/header_pageobj.cy";
import { homePageObj } from "../integration/home_pageobj.cy";
import { TestBase } from "../integration/test_base.cy";

const testBase = new TestBase()
const homePage = new homePageObj()
const menuHeader = new headerPageObj()

let initialCart = '0'
let numberofitemcase1 = '1'
let numberofitemcase2 = '3'

beforeEach('open the browser and go to BookCart Homepage', ()=>{
     testBase.navigateMainUrl();
})

describe('Testing Fitur Cart', ()=>{
    it('#Case1 Verify that the (unauthorized user) success add product to cart', () => {
        menuHeader.precondUnauthorizedUser();
        menuHeader.precondCounterCartZero(initialCart);
        homePage.addProducttoCart(numberofitemcase1);
        homePage.expectedShowAlertSuccessAddtoCart();
        homePage.expectedCounterIncrease(numberofitemcase1);
    })

    it('#Case2 Verify that the (unauthorized user) success add many product to cart', () => {
        menuHeader.precondUnauthorizedUser();
        menuHeader.precondCounterCartZero(initialCart);
        homePage.addProducttoCart(numberofitemcase2);
        homePage.expectedShowAlertSuccessAddtoCart();
        homePage.expectedCounterIncreasetoMax(numberofitemcase2);
    })
})




