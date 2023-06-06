

describe('Find all Clickable Link', () => {
    
    it('Find the Google.com page All Link', async() => {
        
        await browser.url('https://google.com');

        const clickLanguage = $('//*[@id="SIvCob"]/a');
        await clickLanguage.click();
        await browser.pause(5000);
        const elements =$$("//a");
        

        for (let i = 0; i < await elements.length; i++) {
            const linkText = await elements[i].getText();
            if (linkText !=="") {
                console.log('linkText::',linkText); 
            }           
        }
        await browser.pause(3000);
    });

});