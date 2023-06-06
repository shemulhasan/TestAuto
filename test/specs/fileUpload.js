describe('File Attached Feature', () => {

    // it('Check File upload and Save', async () => {
    //     browser.url('https://the-internet.herokuapp.com/upload')

    //     const input = $('#file-upload');
    //     await input.setValue('D:\\All Project\\Prolific cloud\\Image\\sunset.jpg')

    //     // const submitBtn = $('//*[@id="file-submit"]');

    //     // const filepath = path.join(__dirname, 'D:\\All Project\\Prolific cloud\\Image\\sunset.jpg');
    //     // const remoteFilepath = browser.uploadFile(filepath);
    //     // await input.setValue('D:\\All Project\\Prolific cloud\\Image\\sunset.jpg')
    //     // browser.url('https://the-internet.herokuapp.com/upload');

    //     const submitBtn = $('//*[@id="file-submit"]');
    //     await submitBtn.click();
    //     await browser.pause(10000)

    // });
    
   it('Iframe check', async() => {
        await browser.navigateTo('https://the-internet.herokuapp.com/iframe')
const getDocumentText = () => browser.executeScript(
    'return document.documentElement.outerText',
    []
)

// expect(await getDocumentText())
//     .toContain('An iFrame containing the TinyMCE WYSIWYG Editor')
const iframe = await browser.findElement('css selector', 'iframe')
await browser.switchToFrame(iframe)

await browser.pause(1000)
expect(await getDocumentText())
    .toContain('Your content goes here.')
        
    });

});