
const page = require("./page");

class pcLoginPage extends page(){
    // const loginButtonClick = $('button[type="submit"]');


 get userNameTextBox() {return $("#field-3"); }
 get passwordTextBox(){return $("#field-4");}
 get elem1() {return  $('span#securityNumberOne');}
 get elem2() {return $('span#securityNumberTwo');}
 get result(){return}
 get loginButtonClick(){return $('button[type="submit"]'); }

 async performLogin(username, password, secuN1, secuN2){
    await this.userNameTextBox.setValue(username);
    await  this.passwordTextBox.setValue(password);
    await this.elem1.getText(secuN1);
    await this.elem1.getText(secuN2);

    await this.result.setValue(secuN1+ secuN2);
    console.log("Result:::",this.result);
    await this.loginButtonClick.click();
 }
    
 async openApp(){
    await browser.url('https://demo3.pc-staging.com/signin/');
        await browser.maximizeWindow();
 }

}
module.exports = new pcLoginPage();