const {Builder, By, Key, until} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();
const assert = require('assert');
var jsesc = require('jsesc');

describe('IFrame testing', () => {
    before(async () => {
        await driver.get('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
    });

    it('Test', async () => {
        let htmlBody = `
            <!DOCTYPE html>
            <html>
            <body>
            <h1>The iframe element</h1>
            <iframe src="https://www.bing.com" title="W3Schools Free Online Web Tutorials">
            </iframe>
            </body>
            </html>
        `
        let codeTextarea = await driver.findElement(By.id('textareaCode'));
        await driver.executeScript("arguments[0].innerHTML='" + jsesc(htmlBody) + "'", codeTextarea);

        let codeIframe = await driver.findElement(By.xpath('//span[contains(text(), "www.w3schools.com")]'));
        await driver.executeScript("arguments[0].innerHTML='" + '"https://www.bing.com"' + "'", codeIframe);

        let runButton = await driver.findElement(By.id('runbtn'));
        runButton.click();
    });

    after(async () => {
        await driver.quit();
    })
});
