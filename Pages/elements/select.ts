import {$, ElementFinder,by} from 'protractor'

export class select{

    protected selectElement:ElementFinder;

    constructor(elementSelector:string)
    {
        this.selectElement= $(elementSelector);
    }

     public async setValue(value:string)
    {
        //this.selectElement.$('[value="+value+'']')
    }

    public async getDropdownOptions():Promise<any>
    {
        var options:string[];
         await this.selectElement.all(by.tagName("option")).map((option)=>{

         options.push(option.getAttribute("text").toString());
            

         });
         return options;
    }

    

}