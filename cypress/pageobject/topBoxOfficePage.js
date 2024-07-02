class topBoxOfficePage{

    elements = {
        topBoxOfficeLink: () => cy.contains('a', 'Top Box Office'),
        topBoxOfficeList: () => cy.get("li[class*='list-summary-item'] h3"),
        imdbRatingButton: () => cy.get('[data-testid="hero-rating-bar__aggregate-rating__score"]'),
        rateButton: () => cy.contains('Rate'),
        rate5stars: () => cy.get('button[aria-label="Rate 5"][role="button"]'),
    }

    clickTopBoxOfficeSection(){
        this.elements.topBoxOfficeLink().click();
    }

    clickOnThe2ndItemFromTheList(){
        this.elements.topBoxOfficeList().eq(1).should('be.visible').click();
    }

    rateMovieWith5stars(){
        this.elements.imdbRatingButton().first().click({force: true});
        this.elements.rateButton().click();
        this.elements.rate5stars().click({force: true});
        this.elements.rateButton().click({force: true});
    }
}

export default topBoxOfficePage;