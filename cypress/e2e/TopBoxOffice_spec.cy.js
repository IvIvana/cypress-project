import homePage from "../pageobject/homepage";
import topBoxOfficePage from "../pageobject/topBoxOfficePage";

describe('IMDb Top Box Office Rating Test', () => {

  const url = 'https://www.imdb.com';
  const homePageObj = new homePage();
  const topBoxOfficePageObj = new topBoxOfficePage();

  before(() => {
    // Visit IMDb homepage
    cy.visit(url);

    // Accept cookies
    homePageObj.clickAcceptPreferences();
  });

  it('Rates the second movie in Top Box Office with 5 stars', () => {

    // Unfold the Menu
    homePageObj.clickUnfoldTheMenu();

    // Click on the Movies
    homePageObj.clickOnMovies();

    // Navigate to the Top Box Office section
    topBoxOfficePageObj.clickTopBoxOfficeSection();

    // Click on the 2nd item in the Top Box Office list
    topBoxOfficePageObj.clickOnThe2ndItemFromTheList();

    // Rate movie with 5 stars
    topBoxOfficePageObj.rateMovieWith5stars();

  });
  
});
