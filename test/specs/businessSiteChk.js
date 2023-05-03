describe('This is new site for click check new window', () => {
    // beforeEach("Open App", async () => {
    //     await browser.url('https://pc-staging.com/');
    //     await browser.maximizeWindow();
    // })

    it('Home Page Check', async () => {
        await browser.url('https://pc-staging.com/');
        await browser.maximizeWindow();


    const pageCheck= $('//*[@id="__next"]/main/section[1]/div/div/div[2]/div/span');
    const titleText = await pageCheck.getText();
    // await expect(pageCheck).getText('Dream Big');
    console.log("This Is Dream Job:::",titleText);   

    await expect(pageCheck).toHaveText('Imagine, Invent, Implement');
 
    });
    it('Button Check for Clicable', async() => {
        const regButton =$('//*[@id="__next"]/header/div/div/div/div[3]/div/a');
        await expect(regButton).not.toBeClickable();
    });
});