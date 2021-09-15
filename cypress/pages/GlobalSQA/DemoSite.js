class DemoSite {

    goToSite() {
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
    }

    closeDialogBox() {
        cy.get("div[aria-labelledby='tab_item-2'] .close_img").click();
    }

    getAndStoreCoverImageCount() {
        cy.get("iframe[data-src='https://www.globalsqa.com/trainings/']").iframe().as('iframeContent').then( () => {
            cy.get('@iframeContent').then( iframeContent => {
                cy.get(iframeContent).find('div.pic_holder').its('length').then( size => {
                    cy.wrap(size).as('coverImageCount')
                })
            })
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