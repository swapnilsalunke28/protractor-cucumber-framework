import {element,$, ElementFinder,by} from 'protractor'
import { protractor } from 'protractor/built/ptor';
import { isNull } from 'util';

export class editbox
{
     baseElement:ElementFinder;
    constructor(xpath:boolean=false,value:string)
    {
        if(!(isNull(xpath)))
        {
            this.baseElement=element(by.xpath(value));
            return;
        }
        this.baseElement=$(value)
    }

    public async clearText()
    {
        await this.baseElement.sendKeys(protractor.Key.chord(protractor.Key.CONTROL,"a"));
        await this.baseElement.sendKeys(protractor.Key.BACK_SPACE);
        

    }

    public async setValue(value:string,cleartext:boolean=true):Promise<any>
    {
        if(cleartext)
        {
            await this.clearText()
        }
        await this.baseElement.sendKeys(value);

    }

    public async getValue():Promise<any>
    {
        return await this.baseElement.getAttribute("value");
    }
}