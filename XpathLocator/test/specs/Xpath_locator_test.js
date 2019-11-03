describe('Click on ClickToGetAlert Button Using Xpath Locators in WebDriverIO',() => {
    it('should find Absolute Xpath for ClickToGetAlert Button and Then click on it',() => {
        browser.url('http://omayo.blogspot.com')
        $('/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[3]/div/aside/div[1]/div[4]/div[1]/input').click()
        browser.pause(3000); 
        });

    it('should find Relative Xpath for ClickToGetAlert Button and Then click on it',() => {
        browser.url('http://omayo.blogspot.com')
        $('//*[@id="alert1"]').click()
        browser.pause(3000); 
        });   
    }); 
