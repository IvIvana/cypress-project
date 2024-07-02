class breakingBadPage {

    elements = {
        breakingBadLink: () => cy.contains('a', 'Breaking Bad'),
        photosButton: () => cy.contains('Photos'),
        galleryButton: () => cy.get('[data-testid="mv-gallery-button"]'),
        filterButton: () => cy.get('button[data-testid="image-chip-dropdown-test-id"]'),
        personFilterSelectDropdown: () => cy.get('#Person-filter-select-dropdown'),
        closeFilterButton: () => cy.get('[aria-label="Close Prompt"]'),
        photosList: () => cy.get('[data-testid="sub-section-images"] img'),
    }

    clickOnBreakingBadMovie() {
        this.elements.breakingBadLink().click();
    }

    clickOnPhotos() {
        this.elements.photosButton().should('be.visible').click();
    }

    clickOnGalleryButton() {
        this.elements.galleryButton().click();
    }

    openPhotosFilter() {
        this.elements.filterButton().should('be.visible').click();
    }

    selectPersonFromDropdown(){
        this.elements.personFilterSelectDropdown().select('Danny Trejo (6)');
    }

    closeFilter(){
        this.elements.closeFilterButton().click()
    }

    select2ndPhotoInTheList(){
        this.elements.photosList().eq(1).click();
    }

}

export default breakingBadPage;