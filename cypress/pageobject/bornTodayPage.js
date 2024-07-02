class bornTodayPage {

    elements = {
        defaultSearch: () => cy.get('.ipc-chip-list__scroller'),
        birthdayDropdown: () => cy.get('[data-testid="accordion-item-birthdayAccordion"]'),
        enterDateInput: () => cy.get('input[aria-label="Enter birthday"]'),
        seeResultsButton: () => cy.get('button[data-testid="adv-search-get-results"]'),
        resultList: () => cy.get("li[class*='list-summary-item'] h3"),
        birthDateDropdown: () => cy.get('[data-testid="accordion-item-birthDateAccordion"]'),
        enterDateFromInput: () => cy.get('[data-testid="birthDate-start"]'),
        enterDateToInput: () => cy.get('input[data-testid="birthYearMonth-end"]'),

    }

    clickOnDeleteDefaultSearch() {
        this.elements.defaultSearch().click();
    }

    clickOnBirthdayDropdown() {
        this.elements.birthdayDropdown().click();
    }

    clickOnBirthDateDropdown() {
        this.elements.birthDateDropdown().click();
    }

    getYesterdaysDate() {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const month = String(yesterday.getMonth() + 1).padStart(2, '0');
        const day = String(yesterday.getDate()).padStart(2, '0');
        return `${month}-${day}`;
    }

    enterYesterdaysDate() {
        const date = this.getYesterdaysDate();
        this.elements.enterDateInput().clear().type(date).type('{enter}');
    }

    getDateExactly40YearsAgo() {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 40);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    enterFromDateExactly40YearsAgo() {
        const date = this.getDateExactly40YearsAgo();
        this.elements.enterDateFromInput().clear().type(date);
    }

    getformattedDate40YearsAgo() {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 40);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}`;
    }

    enterToDateExactly40YearsAgo(){
        const date = this.getformattedDate40YearsAgo();
        this.elements.enterDateToInput().clear().type(date).type('{enter}');
    }

    clickOnSeeResults() {
        this.elements.seeResultsButton().click();
    }
    clickOnThe3rdNameFromTheList() {
        this.elements.resultList().eq(2).should('be.visible').click();
    }

    clickOnThe1stNameFromTheList() {
        this.elements.resultList().eq(0).should('be.visible').click();
    }
}

export default bornTodayPage;