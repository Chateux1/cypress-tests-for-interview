const webdriverio = require('webdriverio');
const androidOptions = require('../config/caps').androidOptions;
const app = require('../config/apps').androidApp;
const assert = require('chai').assert;
const expect = require('chai').expect;

androidOptions.capabilities.app = app;

describe('some tests', function() {
    let client;

    before(async function () {
        client = await webdriverio.remote(androidOptions);
    });
    
    it('Go through tutorial', async function() {

        const tutorialButtonElement = await client.$("android.widget.Button");
        const tutorialTextElement = await client.$("android.widget.TextView");
        const tutorialTextValues = [
            'Let me teach you about newspapers',
            'Does this image contain multiple newspapers?',
            'Does this newspaper contain pictures?',
            'Now you now everything about newspapers!'
        ]
        
        for(value = 0; value < tutorialTextValues.length; value++) {
            let text = await tutorialTextElement.getText();
            expect(text).to.be.equal(tutorialTextValues[value]);
            await tutorialButtonElement.click();
            await client.pause(500)
        }
    })

    it('Click on first news provider', async function() {
        const newsProvider = await client.$('androidx.recyclerview.widget.RecyclerView android.widget.LinearLayout');
        await newsProvider.click();

        const sectionTitleElement = await client.$('[resource-id="com.example.newsapp:id/toolbar"] android.widget.TextView');
        const sectionTitleText= await sectionTitleElement.getText();
        expect(sectionTitleText).to.be.equal('ABC News');
    })

    it('Add first news article to favorites', async function() {
        const favoriteButtonElement = await client.$$('android.widget.CheckBox')[0];
        await favoriteButtonElement.click();

        // TODO assert checked
        // The below code does not seem to work
        // expect(favoriteButtonElement).to.have.own.property('checked').equal(true);
        // expect(favoriteButtonElement.checked).to.be.true;
    })

    it('Open favorites', async function() {
        const favoritesButtonElement = await client.$('[content-desc="Favorites"]');
        await favoritesButtonElement.click();

        const sectionTitleElement = await client.$('[resource-id="com.example.newsapp:id/toolbar"] android.widget.TextView');
        const sectionTitleText= await sectionTitleElement.getText();
        assert.strictEqual(sectionTitleText, 'Favorites');
    })
})