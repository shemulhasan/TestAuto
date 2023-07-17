describe('Drag and Drop', () => {
    it('Test Drag N Drop', async () => {

        await browser.url('https://material.angular.io/cdk/drag-drop/overview');
        browser.maximizeWindow()
        await browser.pause(10000)
        const draggable = await $('//*[@id="cdk-drop-list-1"]/div[1]');
        await draggable.dragAndDrop();
        // console.log('Element:::::', draggable.getElementText);
        const dropTo = await $('//*[@id="cdk-drop-list-2"]/div[1]');
        await draggable.dragAndDrop(dropTo);
        await browser.pause(10000)

    });

});