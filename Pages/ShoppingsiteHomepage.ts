import {browser,element,by,$} from 'protractor';

export class ShoppingsiteHomepage
{
     async openShoppingSite()
    {
        browser.waitForAngularEnabled(false);
       browser.get("https://pwa-woo.wpmobilepack.com/#/");
    }

    async clickOnExplore()
    {
        $(".content large icon shop-icon").click();
    }

}