
describe("This Is Log in test", () => {

    // beforeEach("Open App", async () => {
    //     await browser.url('https://demo3.pc-staging.com/signin/');
    //     await browser.maximizeWindow();

    // })

    it("Login Functionality Check", async () => {
        await browser.url('https://demo3.pc-staging.com/signin/');
        await browser.maximizeWindow();
        // await browser.url('https://demo3.pc-staging.com/signin/');
        // await browser.maximizeWindow();

        const userNameTextBox = $("#field-3");
        const passwordTextBox = $("#field-4");

        // const summationTextBox =$("#field-5-label");
        // const loginButton =$ ('/html/body/div[1]/main/div/div[1]/div/form/div/button[1]')

        await userNameTextBox.setValue("demo3@gmail.com");
        await passwordTextBox.setValue("123456789");


        const elem1 = await $('span#securityNumberOne');
        // console.log(await elem.getText());
        const securityNumberOne = await elem1.getText();

        const elem2 = await $('span#securityNumberTwo');
        // console.log(await elem.getText());
        const securityNumberTwo = await elem2.getText();


        console.log("securityNumberOne:::", securityNumberOne, "securityNumberTwo::", securityNumberTwo);
        console.log("securityNumberOne typeof:::", typeof Number(securityNumberOne), "securityNumberTwo typeof::", typeof Number(securityNumberTwo));


        const result = (Number(securityNumberOne) + Number(securityNumberTwo));
        console.log("result:::", result);


        const summationText = $("#field-5");
        await summationText.setValue(result);
        //  return(result);
        const loginButtonClick = $('button[type="submit"]');

        await loginButtonClick.click();
        await browser.pause(5000)

       
        // await browser.url('https://demo3.pc-staging.com/admin/');
        // const elements =$$("//a");

        // for (let i = 0; i < await elements.length; i++) {
        //     const linkText = await elements[i].getText();
        //     if (linkText !=="") {
        //         console.log('linkText::',linkText); 
        //     }           
        // }


    });
    it('Create Footer', async() => {

        const clickSite = $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[2]/div/span[2]');
        const clickfooter = $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[2]/a[4]/div/div/span');
        const clickCreatebutton =$('//*[@id="root"]/main/div/div[2]/div[2]/div/div/div[1]/button');

        await clickSite.click();
        await clickfooter.click();
        await clickCreatebutton.click();
         await browser.pause(5000);
        
    });

})