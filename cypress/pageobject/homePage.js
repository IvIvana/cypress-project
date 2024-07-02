class homePage {

    elements = {
        acceptCookiesButton: () => cy.get('[data-testid="accept-button"]:visible'),
        searchInput: () => cy.get('input[name="q"]'),
        profileLinkNicolasCage: () => cy.contains('Nicolas Cage'),
        menuLink: () => cy.get('[aria-label="Open Navigation Drawer"]'),
        moviesLink: () => cy.contains('Movies'),
        tvShowsLink: () => cy.contains('TV Shows'),
        top250TVShowsLink: () => cy.contains('a', 'Top 250 TV Shows'),
        celebsLink: () => cy.get('[aria-label="Expand Celebs Nav Links"]'),
        bornTodayLink: () => cy.contains('a', 'Born Today'),
    }

    clickAcceptPreferences() {
        this.elements.acceptCookiesButton().click();
    }

    searchForNicolasCageAndOpenLink() {
        this.elements.searchInput().type('Nicolas Cage{enter}');
        this.elements.profileLinkNicolasCage().click();
    }

    clickUnfoldTheMenu() {
        this.elements.menuLink().click();
    }

    clickOnMovies() {
        this.elements.moviesLink().click();
    }

    clickOnTVShows() {
        this.elements.tvShowsLink().click();
    }

    clickOnTop250TVShows(){
        this.elements.top250TVShowsLink().click();
    }

    clickOnCelebs(){
        this.elements.celebsLink().click();
    }

    clickOnBornToday(){
        this.elements.bornTodayLink().click();
    }

}

export default homePage;