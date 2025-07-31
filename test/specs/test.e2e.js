const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('@desktop @mobile My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        if(browser.isMobile) {
            console.log('Running on mobile device, skipping login test');
        
    }else{
            console.log('Running on desktop browser, proceeding with login test')
        }
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        //await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
})

