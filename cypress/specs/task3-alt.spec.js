describe('Read and print text displayed after loading', () => {

    it('Go to page', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/2');
    })

    it('Click start button', () => {
        cy
        .get('#start button').click()
        .get('#loading').should('be.visible')
    })

    it('Wait for loading to finish', () => {
        cy.get('#finish', { timeout: 10000 }).should('be.visible')
    })

    it('Read loaded text', function() {
        cy.get('#finish h4').then( function(element) {
            cy.wrap(element.text()).as('LoadedText');
        })
    })

    it('Print loaded text', function() {
        cy.log(this.LoadedText)
    })
})