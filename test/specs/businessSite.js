describe('This is new site for click check new window', () => {
    before("Open App", async () => {
        await browser.url('https://pc-staging.com/');
        await browser.maximizeWindow();
    })

    it('Open a New window', async () => {

        const clickPricing = $('//*[@id="__next"]/header/div/div/div/div[2]/nav/ul/li[3]/a');
        await clickPricing.click();

        await browser.newWindow("https://admin.pc-staging.com/signin?registration=true&subscription=6409a8eb4ca5bf96cff1e992");

        const inputYourName = $('//*[@id="field-5"]');
        const inputEmail = $('//*[@id="field-6"]');
        const inputBusiness = $('//*[@id="field-7"]');
        const inputPhone = $('//*[@id="chakra-modal--body-3"]/div/form/div[2]/div[2]/div/input');
        const inputPassword = $('//*[@id="field-9"]');
        const inputConPass = $('//*[@id="field-10"]');

        await inputYourName.setValue("Test mocha");
        await inputEmail.setValue("shemul.prolific+19@gmail.com");
        await inputBusiness.setValue("mochatests");
        await inputPhone.setValue("01740033862");
        await inputPassword.setValue("123456789");
        await inputConPass.setValue("123456789");

        const saveButton = $('button[type="submit"]');

        await saveButton.click();

        const inputName = $('//*[@id="field-11"]');
        const emailInput = $('//*[@id="field-12"]');
        const cardInfoInput = $('//*[@id="chakra-modal--body-4"]/form/div[3]/div/div');
        console.log("Card info:::", cardInfoInput);
        const expireMonth = $('//*[@id="root"]/form/div/div[2]/span[2]/span[1]/span/span');
        const inputCvc = $('//*[@id="root"]/form/div/div[2]/span[2]/span[2]/span/span/input');

        await inputName.setValue("Hasan Shemul");
        await emailInput.setValue("shemul@gmail.com");

        await browser.pause(15000);

        await cardInfoInput.setValue("4242424242424242");
        await expireMonth.setValue("02/34");
        await inputCvc.setValue("123");

        const procedButton = $('button[type="submit"]');

        await procedButton.click();

        await browser.pause(50000);
    });
});