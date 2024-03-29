describe("This Is Log in test", () => {

    before("Open App", async () => {
        await browser.url('https://demos.pc-staging.com/signin/');
        await browser.maximizeWindow();
        
    })

    it("Login Functionality Check", async () => {
        // await pcLoginPage.openApp();


        const userNameTextBox = $("#field-3");
        const passwordTextBox = $("#field-4");

        await userNameTextBox.setValue("demo1@yopmail.com");
        await passwordTextBox.setValue("123456789");


        const elem1 = await $('span#securityNumberOne');
        const securityNumberOne = await elem1.getText();

        const elem2 = await $('span#securityNumberTwo');
        const securityNumberTwo = await elem2.getText();

        const result = (Number(securityNumberOne) + Number(securityNumberTwo));
        console.log("result:::", result);


        const summationText = $("#field-5");
        await summationText.setValue(result);
        //  return(result);
        const loginButtonClick = $('button[type="submit"]');

        await loginButtonClick.click();
        await browser.pause(5000)


    });

    // it('Template Check', async() => {
    //     await browser.url('https://testshop.pc-staging.com/admin/builder/page/create');

    
    //    const importTmaplate = $('//*[@id="root"]/main/div/div[2]/div[3]/div[1]/div/button[2]');
    //    await importTmaplate.click();

    //    const clickTemplateInsert =$('//*[@id="chakra-modal--body-1674"]/div[3]/ul/li[4]/a');
    //    await clickTemplateInsert.click();

    //    await browser.pause(5000);

    // });
it('Blog Tag Create and UI Check', async() => {
    const clickBlog = $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[3]/div');
    const clickTag = $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[3]/a[2]');
    const clickCreateButton = $('//*[@id="root"]/main/div/div[2]/div[2]/div/div/div[1]/button');

    await clickBlog.click();
    await clickTag.click();
    await clickCreateButton.click();
    await browser.pause(2000);

    const inputName =$('.chakra-input');
    await inputName.setValue("New Tag1");

   const chkLebel = $('//form//p[contains(text(), "Select a tag type :")]');
    const inputLebel = await chkLebel.getText();
    console.log("This is Name Lebel:::", inputLebel);

    const radioButton1 = $('body.chakra-ui-light:nth-child(2) div.css-1vsours div.css-1cg3t4o div.chakra-container.css-11zanjd div.css-123774r div.chakra-form-control.css-fp136g:nth-child(2) div.css-cinlo3 div.chakra-radio-group.css-0 div.chakra-stack.css-x9juev label.chakra-radio.css-1ttb8zx:nth-child(1) > span.chakra-radio__label.css-1i66d7g');
    const radioButton2 = $('body.chakra-ui-light:nth-child(2) div.css-1vsours div.css-1cg3t4o div.chakra-container.css-11zanjd div.css-123774r div.chakra-form-control.css-fp136g:nth-child(2) div.css-cinlo3 div.chakra-radio-group.css-0 div.chakra-stack.css-x9juev label.chakra-radio.css-1ttb8zx:nth-child(2) > span.chakra-radio__label.css-1i66d7g');

    await radioButton1.click();

    // const radioLebel1 = $('.chakra-radio__label')
    const chkRadio1 = await radioButton1.getText();
    console.log("This is radio one:::", chkRadio1);
    const chkRadio2 = await radioButton2.getText();
    console.log("This is radio Two:::", chkRadio2);

    // await radioButton2.click();

    await browser.pause(5000);

    const saveButton =  $('//*[@id="root"]/main/div/div[2]/div[2]/div/form/button');
    await saveButton.click();
    await browser.pause(3000)

});
   

})