describe('This is Update Profile Data', async() => {

    beforeEach("Open App", async () => {
        await browser.url('https://demo3.pc-staging.com/signin/');
        await browser.maximizeWindow();

    })
    
    it('Update Profile Name and email', async() => {
       
            const userNameTextBox = $("#field-3");
        const passwordTextBox = $("#field-4");
        await userNameTextBox.setValue("demo3@gmail.com");
        await passwordTextBox.setValue("123456789");


        const elem1 = await $('span#securityNumberOne');
        const securityNumberOne = await elem1.getText();

        const elem2 = await $('span#securityNumberTwo');
        const securityNumberTwo = await elem2.getText();
        const result = (Number(securityNumberOne) + Number(securityNumberTwo));
        console.log("result:::", result);


        const summationText = $("#field-5");
        await summationText.setValue(result);
        const loginButtonClick = $('button[type="submit"]');

        await loginButtonClick.click();
        await browser.pause(5000)

            
        const xpath1 = $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[4]/div');

        await xpath1.click();
        const xpath2 = $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[4]/a[1]');
        await xpath2.click();

            const findOperatoin = await $("#field-35-label");
            const fieldLevel = await findOperatoin.getText();
            const clickevent = await $("#field-35");
            await clickevent.setValue('Shemul Grecery Shop');
    
            const saveButton = $('button[type="submit"]');
    
            await saveButton.click();
    
    
            await browser.pause(50000);
    
    
        });
        
    
});