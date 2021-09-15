describe('Get number of cover images displayed in an iframe', () => {

    it('Go to page', () => {
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
    })

    it('Close blue dialog box', () => {
        cy
        .get("div[aria-labelledby='tab_item-2'] .close_img").click()
        .get("div[aria-labelledby='tab_item-2'] .information.closable").should('be.not.visible')
    })

    it('Get number of cover images', function() {
        cy
        .get("iframe[data-src='https://www.globalsqa.com/trainings/']")
        .its('0.contentDocument').should('exist')
        .its('body').should('not.be.undefined').should('not.be.null').then(cy.wrap)
        .find('div.pic_holder')
        .its('length').should('be.equal', 9).then(cy.wrap).as('ImageCount')
    })

    it('Type number of cover images to search bar', function() {
        cy
        .scrollTo('top')
        .get('#s').click().type(this.ImageCount)
        .should('have.value', this.ImageCount)
    })
})