Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe) => {
    return $iframe._hasloaded 
    ? $iframe.contents().find('body')
    : new Cypress.Promise(resolve => {
        $iframe.on('load', () => {
            $iframe._hasloaded = true;
            resolve($iframe.contents().find('body'))
        })
    })
})