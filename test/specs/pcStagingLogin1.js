const pcLoginPage = require("../pageobjects/pc.login.page") ;


describe("This Is Log in test", () => {

    beforeEach("Open App", async () => {
        await pcLoginPage.openApp();

    })

    it("Login Functionality Check", async () => {
        
     
        // const userNameTextBox = $("#field-3");
        // const passwordTextBox = $("#field-4");

        // const summationTextBox =$("#field-5-label");
        // const loginButton =$ ('/html/body/div[1]/main/div/div[1]/div/form/div/button[1]')

        // await userNameTextBox.setValue("demo3@gmail.com");
        // await passwordTextBox.setValue("123456789");


        // const elem1 = await $('span#securityNumberOne');
        // // console.log(await elem.getText());
        // const securityNumberOne = await elem1.getText();

        // const elem2 = await $('span#securityNumberTwo');
        // // console.log(await elem.getText());
        // const securityNumberTwo = await elem2.getText();


        // console.log("securityNumberOne:::", securityNumberOne, "securityNumberTwo::", securityNumberTwo);
        // console.log("securityNumberOne typeof:::", typeof Number(securityNumberOne), "securityNumberTwo typeof::", typeof Number(securityNumberTwo));


        // const result = (Number(securityNumberOne) + Number(securityNumberTwo));
        // console.log("result:::", result);


        // const summationText = $("#field-5");
        // await summationText.setValue(result);
        // //  return(result);
        // const loginButtonClick = $('button[type="submit"]');

        // await loginButtonClick.click();
        

        
        await pcLoginPage.performLogin('demo3@gmail.com', '123456789', secuN1, secuN2);
        await browser.pause(5000)

    });

    // it('Click on Admin Profile', async () => {
    //     await browser.url('https://demo3.pc-staging.com/admin/profile');
    //     const findOperatoin = await $("#field-35-label");
    //     const fieldLevel = await findOperatoin.getText();
    //     console.log("Lebel Print:::", fieldLevel);
    //     // await expect(fieldLevel).toBeDisplayed('Business Name');
    //     const clickevent = await $("#field-35");
    //     await clickevent.setValue('Shemul Grecery Shop');

    //     const saveButton = $('button[type="submit"]');

    //     await saveButton.click();


    //     await browser.pause(50000);


    //     // const sumClassValue = await sumationAreaElement.getAttribute("class");
    //     // console.log(sumClassValue);


    // });

})