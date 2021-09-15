class DemoSite {

    goToSite() {
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
    }

    closeDialogBox() {
        cy.get("div[aria-labelledby='tab_item-2'] .close_img").click();
    }

    getIframeDocument() {
        return cy
        .get("iframe[data-src='https://www.globalsqa.com/trainings/']")
        .its('0.contentDocument').should('exist');
    }

    getIframeBody() {
        return this.getIframeDocument()
        .its('body').should('not.be.undefined').should('not.be.null')
        .then(cy.wrap)
    }

    getAndStoreCoverImageCount() {
        this.getIframeBody().find('div.pic_holder', {timeout: 5000}).its('length').then( size => {
            cy.wrap(size).as('coverImageCount')
        })
    }

    setStoredCoverImageCountToSearchBar() {
        cy.scrollTo('top');
        cy.get('@coverImageCount').then( text => {
            cy.get('#s').click().type(text)
        });
    }

    getSearchBarContent() {
        cy.scrollTo('top');
        return cy.get('#s');
    }
}

export default DemoSite;