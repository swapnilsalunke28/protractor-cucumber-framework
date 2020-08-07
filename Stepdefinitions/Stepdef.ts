import {defineSupportCode,Given,When, Then} from 'cucumber'
import { Homepage } from '../Pages/Homepage'
import { Login } from '../Pages/Login';
import { ShoppingsiteHomepage } from '../Pages/ShoppingsiteHomepage';
import { Calculator } from '../Pages/Calculator';
import { callbackify } from 'util';
import { browser } from 'protractor';

var home =new Homepage();
var login= new Login();
var os= new ShoppingsiteHomepage();
var cal=new Calculator();
Given(/^I am on the homepage$/,async()=>{
    await home.openBrowser();
})

Given(/^I am on the homepage of "([^"]*)"$/,async(pagename:any)=>{
    await os.openShoppingSite();
})

When(/^I enter userame and password$/,async()=>{
   await login.enterUsername();
   await login.enterPassword();
})

Then(/^I click on Login button$/,async()=>{
    await home.clickLogin();
})

Then(/^I click on signin button$/,async()=>{
    await login.clickSingin();
})

Then(/^I click on "([^"]*)" icon$/,async(icon:string)=>{
    await os.clickOnExplore()
})

Given(/^I navigate to the calculation page$/,async()=>{
    await cal.navigateToCalculatorPage();
})

Then(/^I enter the numbers in textbox$/,async()=>{
    await cal.enterTheNumbersInTextbox(10,20);
    browser.sleep(5000);
})


Then(/^I click on Go button$/,async()=>{
  await cal.getGoButtonText().then((text)=>{

        console.log(text);
    });
    
})