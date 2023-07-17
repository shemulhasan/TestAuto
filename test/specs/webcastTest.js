describe('Webcast Project Test Automation',() => {


    it('Webcast Log in Functionality Test', async() => {
    
        await browser.url('https://webcast.prolific-logic.com/login')
        await browser.maximizeWindow();

        const enterEmail = $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/input[1]');
        const enterPassword = $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[3]/input[1]');

        await enterEmail.setValue("analytics@yopmail.com");
        await enterPassword.setValue(123456789);

        const signButton = $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[5]/button[1]');
        await signButton.click();
        await browser.pause(5000);
        
    });
    
});