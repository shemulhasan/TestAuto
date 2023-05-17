describe('Login Test', () => {
    
    it('Prolific Cloud Log in test', async() => {
        await browser.url('https://pc-staging.com/');
        await browser.maximizeWindow();

        const registerButton =$('//*[@id="__next"]/header/div/div/div/div[3]/div/a')
        await registerButton.click();

        await browser.pause(5000);

    });
    
});