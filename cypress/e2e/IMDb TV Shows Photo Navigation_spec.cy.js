import breakingBadPage from "../pageobject/breakingBadPage";
import homePage from "../pageobject/homepage";

describe('IMDb TV Shows Photo Navigation Test', () => {

  const homePageObj = new homePage();
  const breakingBadPageObj = new breakingBadPage();
  const url = 'https://www.imdb.com';

  before(() => {
    // Visit IMDb homepage
    cy.visit(url);

    // Accept cookies
    homePageObj.clickAcceptPreferences();
  });

  it('Navigates to Breaking Bad, filters Danny Trejo photos, and clicks on the 2nd photo', () => {

    // Unfold the Menu
    homePageObj.clickUnfoldTheMenu();

    // Click on TV Shows
    homePageObj.clickOnTVShows();

    // Navigate to the "Top 250 TV Shows" 
    homePageObj.clickOnTop250TVShows();

    // Click on "Breaking Bad" 
    breakingBadPageObj.clickOnBreakingBadMovie();

    // Wait for the page to load, then click on "Photos"
    breakingBadPageObj.clickOnPhotos();

    // Open gallery
    breakingBadPageObj.clickOnGalleryButton();

    // Open filter 
    breakingBadPageObj.openPhotosFilter();

    // Select Danny Trejo from the dropdown
    breakingBadPageObj.selectPersonFromDropdown();

    // Close filter
    breakingBadPageObj.closeFilter();

    // Click on the 2nd photo in the list
    breakingBadPageObj.select2ndPhotoInTheList();
  });
});
