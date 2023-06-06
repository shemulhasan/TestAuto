describe('Login Test', () => {
    
    it('Prolific Cloud Log in test', async() => {
        await browser.url('https://pc-staging.com/');
        await browser.maximizeWindow();

        const registerButton =$('//*[@id="__next"]/header/div/div/div/div[3]/div/a')
        await registerButton.click();

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        
        // await browser.closeWindow()
        await browser.switchToWindow(handles[1])
        console.log(await browser.getTitle()) 

        const inputYourName = $('//*[@id="field-4"]');
        const inputEmail = $('//*[@id="field-5"]');
        const inputBusiness = $('//*[@id="field-6"]');
        const inputPhone = $('//*[@id="chakra-modal--body-3"]/div/form/div[2]/div[2]/div/input');
        const inputPassword = $('//*[@id="field-8"]');
        const inputConPass = $('//*[@id="field-9"]');

        await inputYourName.setValue("Test mocha");
        await inputEmail.setValue("abs.sdl2021+4@gmail.com");
        await inputBusiness.setValue("abssdl");
        await inputPhone.setValue("01740033862");
        await inputPassword.setValue("123456789");
        await inputConPass.setValue("123456789");

        const saveButton = $('button[type="submit"]');

        await saveButton.click();

        await browser.pause(50000);

    });
    
});