import homePage from "../pageobject/homepage";
import nicolasCagePage from "../pageobject/nicolasCagePage";

describe('IMDb Nicolas Cage Upcoming Movies Test', () => {

  const homePageObj = new homePage();
  const nicolasCagePageObj = new nicolasCagePage();
  const url = 'https://www.imdb.com';

  before(() => {
    // Visit IMDb homepage
    cy.visit(url);

    // Accept cookies
    homePageObj.clickAcceptPreferences();
  });

  it('Searches for Nicolas Cage, navigates to his profile, and clicks on the first Pre-production movie', () => {
    // Search for Nicolas Cage and open profile link
    homePageObj.searchForNicolasCageAndOpenLink();

    // Expand the 'Upcoming' section in the Credits section
    nicolasCagePageObj.expandUpcomingSection();

    // Click on the first movie with a 'Pre-production' tag
    nicolasCagePageObj.openFirstMovie();
  });
});