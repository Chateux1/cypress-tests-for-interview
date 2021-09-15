import HomePage from '../pages/TheInternetHerokuApp/HomePage';

const homePage = new HomePage();

describe('The Internet Heroku App', () => {

    it('Read and print text displayed after loading', () => {

        homePage.goToSite();
        homePage.clickStartButton();
        homePage.getLoadingBar().should('be.visible');
        homePage.waitForLoadingToFinish().should('be.visible');    
        homePage.storeLoadedText()
        homePage.printStoredLoadedText();
    })
})