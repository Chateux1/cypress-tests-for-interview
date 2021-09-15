class HomePage {

    goToSite() {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/2');
    }

    clickStartButton() {
        cy.get('#start button').click();
    }

    getLoadingBar() {
        return cy.get('#loading');
    }

    waitForLoadingToFinish() {
        return cy.get('#finish', { timeout: 10000 });
    }

    storeLoadedText() {
        cy.get('#finish h4').then( element => {
            cy.wrap(element.text()).as('LoadedText');
        })
    }

    printStoredLoadedText() {
        cy.get('@LoadedText').then( text => {
            cy.log(text);
        })
    }
}

export default HomePage;