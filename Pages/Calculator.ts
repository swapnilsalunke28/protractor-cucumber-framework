import { editbox } from "./elements/editbox";
import {browser} from 'protractor';
import { button } from "./elements/button";
export class Calculator
{
     firstnumber=new editbox(true,"//input[@class='input-small ng-valid ng-touched ng-dirty'][1]");
     secondnumber=new editbox(true,"//input[@class='input-small ng-valid ng-touched ng-dirty'][2]");
     goButton=new button("#gobutton");

     public async navigateToCalculatorPage(){

         browser.waitForAngularEnabled(false);
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        browser.sleep(7000);
     }

     public async enterTheNumbersInTextbox(value1:any,value2:any)
     {
         await this.firstnumber.setValue(value1);
         await this.secondnumber.setValue(value2);
     }

     public async getGoButtonText():Promise<any>
     {
         return await this.goButton.getButtonText();
        // return await this.goButton.getButtonText();
     }

}