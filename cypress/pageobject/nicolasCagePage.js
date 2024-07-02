class nicolasCagePage {

    elements = {
        upcomingSection : () => cy.get('[data-testid="accordion-item-actor-upcoming-projects"]'),
        tagPreProduction: () => cy.contains('Pre-production'),
    }

    expandUpcomingSection(){
        this.elements.upcomingSection().click();
    }
     openFirstMovie(){
        this.elements.tagPreProduction().eq(0).should('be.visible').click();
     }
}

export default nicolasCagePage;