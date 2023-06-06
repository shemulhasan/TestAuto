describe('Multiple windows', () => {
    it('Handle multiple windows', async () => {
     


		// navigate to the url
	await browser.url("https://chercher.tech/practice/hidden-division-popup");
        //click the element which open popup
       const popclick= $('/html/body/a')
       await popclick.click()
        // send text to Name field on overlay
      const input=  $('/html/body/div/div/input')
      await input.setValue("Hidden Division Text");
       await browser.pause(3000);
    })
})