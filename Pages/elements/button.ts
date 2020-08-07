import {$} from 'protractor'

export class button
{
    buttonName=null;
    constructor (elementSelector:string)
    {
        this.buttonName=$(elementSelector)
    }

    public async getButtonText():Promise<any>{
       // console.log(this.buttonName.getAttribute("text"));
         return await this.buttonName.getText();
            
       
    }

    public async clickButton()
    {
        this.buttonName.click();
    }
}