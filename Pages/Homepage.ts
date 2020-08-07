import {browser,element,by,$} from 'protractor'

export class Homepage {
    login = element(by.xpath("//a[text()='Login']"));

    openBrowser()
    {
        browser.waitForAngularEnabled(false);
        browser.get("http://www.helpingtesters.com/practice/protractor/index.php")
    }

    clickLogin()
    {
        this.login.click();
    }
}