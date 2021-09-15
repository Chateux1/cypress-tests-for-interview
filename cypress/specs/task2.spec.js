import { expect } from 'chai';
import DemoSite from '../pages/GlobalSQA/DemoSite';

const demoSite = new DemoSite();

describe('GlobalSQA page', () => {

    it('Get number of cover images displayed in an iframe', () => {
        
        demoSite.goToSite();
        demoSite.closeDialogBox();
        demoSite.getAndStoreCoverImageCount();
        demoSite.setStoredCoverImageCountToSearchBar();
        demoSite.getSearchBarContent().should( contents => {
            const value = contents.val()

            expect(value).to.be.not.empty;
            expect(isNaN(value)).to.be.false;
        })
    })
})