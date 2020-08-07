import {browser,element,by,$} from 'protractor'

export class Login
{
     username=$("#username");
     password=$("#password");
     signin=$("#submit")

     enterUsername()
     {
         this.username.clear();
         this.username.sendKeys("");
     }

     enterPassword()
     {
         this.password.clear();
         this.password.sendKeys("")
     }

     clickSingin()
     {
         this.signin.click();
     }
}