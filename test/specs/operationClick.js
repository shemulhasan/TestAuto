describe('Click on Specific Menu', async () => {

    it('This is Click find element', async () => {
        await browser.url('https://demo3.pc-staging.com/admin/profile');

        const bsnNameBox = $('#field-35');
        const emailBox = $('field-36');

        await bsnNameBox.setValue('Shemul Grocery Shop');
        await emailBox.setValue('abdussobhan.cse@gmail.com')

        const saveButton = $('button[type="submit"]');
        await saveButton.click();
    });
});