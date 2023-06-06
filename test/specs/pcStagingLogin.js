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
    
    //         it("Handle Modal pop up", async ()=> {
    //             await browser.url("https://testshop.pc-staging.com/admin/subscription-price");
    //             await  browser.pause(5000);
    //             const clickYeary =   $('/*[@id="root"]/main/div/div[2]/div[2]/div[1]/div/p[2]');
    //             await clickYeary.click();
    //             await browser.pause(5000);
    //             const clickPackage = $('//*[@id="root"]/main/div/div[2]/div[2]/div[2]/div[1]/div/div/button');
    //             await clickPackage.click();
           
         
    //     const cardNumber = $('//*[@id="chakra-modal--body-27"]/div/form/div[1]/div[1]/div/div/table/tbody/tr[3]');
    //     // (await cardNumber).setValue('4242424242424242');
    //     await   cardNumber.click();
    //     const buttonClick =$('//*[@id="chakra-modal--body-27"]/div/form/div[2]/button[2]');
    //     await  buttonClick.click();


    //     await  browser.pause(1000)
    //     // expect(await getDocumentText())
    //     //     .toContain('Your content goes here.')



    // });
    it('Handle multiple windows', async () => {
        await browser.url("https://testshop.pc-staging.com/admin/subscription-price");
                await  browser.pause(5000);
                const clickYeary =   $('//*[@id="root"]/main/div/div[2]/div[2]/div[1]/div/p[2]');
                await clickYeary.click();
                await browser.pause(5000);
                const clickPackage = $('//*[@id="root"]/main/div/div[2]/div[2]/div[2]/div[1]/div/div/button');
                await clickPackage.click();
           
         
        const cardNumber = $('//*[@id="field-23"]');
        // (await cardNumber).setValue('4242424242424242');
        await   cardNumber.setValue('FREE2');
        const buttonClick =$('//*[@id="chakra-modal--body-19"]/div/form/div[1]/div[2]/button');
        await  buttonClick.click();






	// 	// navigate to the url
	// await browser.url("https://chercher.tech/practice/hidden-division-popup");
    //     //click the element which open popup
    //    const popclick= $('/html/body/a')
    //    await popclick.click()
    //     // send text to Name field on overlay
    //   const input=  $('/html/body/div/div/input')
    //   await input.setValue("Hidden Division Text");
    //    await browser.pause(3000);
    })

})