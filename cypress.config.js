const { defineConfig } = require("cypress");
//const {Builder, By} = require('selenium-webdriver');
//const chrome = require('selenium-webdriver/chrome');
const Testdata = require('./cypress/fixtures/Testdata.json')
module.exports = defineConfig({
reporter:'cypress-mochawesome-reporter',
reporterOptions:{
charts:true,
reportPageTitle:'Cypress Automation Test Report',
embeddedScreenshots:true,
inlineAssets: true,
saveAllAttempts:false,
overwrite:false
  },
  retries:0,
  chromeWebSecurity:false,
  e2e: {
    experimentalOriginDependencies:true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
/*
      const gotoAnotherWindow = async (url) => {
        const driver= await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().addArguments('--disable-extensions'))
        .build();
        await driver.manage().window().maximize()
        if(Testdata.env=='Dev')
        {
        await driver.get(Testdata.SecondSiteUrl)
        }
        else if(Testdata.env=='QA')
        {
        await driver.get(Testdata.SecondSiteUrl)
        }
        else if(Testdata.env=='Staging')
        {
        await driver.get(Testdata.SecondSiteUrl) 
        }
        var url=await driver.getCurrentUrl()
        // await driver.close()
        return url
      };

      on('task',{
        getNewWindow:gotoAnotherWindow,
      });*/
      // implement node event listeners here
    },
    specPattern:'cypress/integration/*.js'
  },
 
});
