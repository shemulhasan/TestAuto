// import pcLoginPage from "../pageobjects/pc.login.page.js"


describe("This Is Log in test", () => {

    beforeEach("Open App", async () => {
        await browser.url('https://demo3.pc-staging.com/signin/');
        await browser.maximizeWindow();

    })

    it("Login Functionality Check", async () => {
        // await pcLoginPage.openApp();


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


        // console.log("securityNumberOne:::", securityNumberOne, "securityNumberTwo::", securityNumberTwo);
        // console.log("securityNumberOne typeof:::", typeof Number(securityNumberOne), "securityNumberTwo typeof::", typeof Number(securityNumberTwo));


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
        // await pcLoginPage.performLogin('demo3@gmail.com', '123456789', secuN1, secuN2);


    });

    it('Click on Admin Profile', async () => {

        const xpath1 = $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[2]');

        await xpath1.click();
        const xpath2 = $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[2]/a[1]');
        await xpath2.click();

        // await browser.pause(30000);

        const createPages =  $('//*[@id="root"]/main/div/div[2]/div[2]/div/div/div[1]/div/button/a');
       
        
        await createPages.click();


        await browser.pause(5000);


        // const sumClassValue = await sumationAreaElement.getAttribute("class");
        // console.log(sumClassValue);


    });

})