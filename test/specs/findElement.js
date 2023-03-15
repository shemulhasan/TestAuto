
describe("This Is Log in test", () => {

    // beforeEach("Open App", async () => {
    //     await browser.url('https://demo3.pc-staging.com/signin/');
    //     await browser.maximizeWindow();

    // })

    it("Login Functionality Check", async () => {
        await browser.url('https://demo3.pc-staging.com/signin/');
        await browser.maximizeWindow();
        // await browser.url('https://demo3.pc-staging.com/signin/');
        // await browser.maximizeWindow();

        const userNameTextBox = $("#field-3");
        const passwordTextBox = $("#field-4");

        // const summationTextBox =$("#field-5-label");
        // const loginButton =$ ('/html/body/div[1]/main/div/div[1]/div/form/div/button[1]')

        await userNameTextBox.setValue("demo3@gmail.com");
        await passwordTextBox.setValue("123456789");


        const elem1 = await $('span#securityNumberOne');
        // console.log(await elem.getText());
        const securityNumberOne = await elem1.getText();

        const elem2 = await $('span#securityNumberTwo');
        // console.log(await elem.getText());
        const securityNumberTwo = await elem2.getText();


        console.log("securityNumberOne:::", securityNumberOne, "securityNumberTwo::", securityNumberTwo);
        console.log("securityNumberOne typeof:::", typeof Number(securityNumberOne), "securityNumberTwo typeof::", typeof Number(securityNumberTwo));


        const result = (Number(securityNumberOne) + Number(securityNumberTwo));
        console.log("result:::", result);


        const summationText = $("#field-5");
        await summationText.setValue(result);
        //  return(result);
        const loginButtonClick = $('button[type="submit"]');

        await loginButtonClick.click();
        await browser.pause(5000)

        //     const numberText = await summationText.getText();
        //     console.log(numberText);

        //    await expect(result).toHaveText();

        // const sumationAreaElement=$("#chakra-form-control css-qav60l");
        // const sumClassValue = await sumationAreaElement.getAttribute("class");
        // console.log(sumClassValue);

        // await expect(sumationAreaElement).toBeAttribute("class","chakra-form-control css-qav60l");
        await browser.url('https://demo3.pc-staging.com/admin/');
        const elements =$$("//a");

        for (let i = 0; i < await elements.length; i++) {
            const linkText = await elements[i].getText();
            if (linkText !=="") {
                console.log('linkText::',linkText); 
            }           
        }


    });

    // it('Click on Admin Profile', async () => {
    //     await browser.url('https://demo3.pc-staging.com/admin/profile');
    //     const findOperatoin = await $("#field-35-label");
    //     const fieldLevel = await findOperatoin.getText();
    //     console.log("Lebel Print:::", fieldLevel);
    //     // await expect(fieldLevel).toBeDisplayed('Business Name');
    //     const clickevent = await $("#field-35");
    //     await clickevent.setValue('Shemul Grecery Shop');

    //     const saveButton = $('button[type="submit"]');

    //     await saveButton.click();


    //     await browser.pause(50000);


        // const sumClassValue = await sumationAreaElement.getAttribute("class");
        // console.log(sumClassValue);


    // });

})