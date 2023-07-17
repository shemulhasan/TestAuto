describe("This Is Log in test", () => {

    before("Open App", async () => {
        await browser.url('https://testshop.pc-staging.com/signin/');
        await browser.maximizeWindow();

    })

    it("Login Functionality Check", async () => {
        // await pcLoginPage.openApp();


        const userNameTextBox = $("#field-3");
        const passwordTextBox = $("#field-4");

        await userNameTextBox.setValue("johnplayer@yopmail.com");
        await passwordTextBox.setValue("123456789");


        const elem1 = await $('span#securityNumberOne');
        const securityNumberOne = await elem1.getText();

        const elem2 = await $('span#securityNumberTwo');
        const securityNumberTwo = await elem2.getText();

        const result = (Number(securityNumberOne) + Number(securityNumberTwo));
        console.log("result:::", result);


        const summationText = $("#field-5");
        await summationText.setValue(result);
        //  return(result);
        const loginButtonClick = $('button[type="submit"]');

        await loginButtonClick.click();
        await browser.pause(5000)


    });

    it('Template Check', async() => {
        await browser.url('https://testshop.pc-staging.com/admin/builder/page/create');

    
       const importTmaplate = $('//*[@id="root"]/main/div/div[2]/div[3]/div[1]/div/button[2]');
       await importTmaplate.click();

       const clickTemplateInsert =$('//*[@id="chakra-modal--body-1674"]/div[3]/ul/li[4]/a');
       await clickTemplateInsert.click();

       await browser.pause(5000);

    });

   

})