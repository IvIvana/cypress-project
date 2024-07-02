import bornTodayPage from "../pageobject/bornTodayPage";
import homePage from "../pageobject/homepage";

describe('IMDb Born Today Section Test', () => {

  const homePageObj = new homePage();
  const bornTodayPageObj = new bornTodayPage();
  const url = 'https://www.imdb.com';

  before(() => {
    // Visit IMDb homepage
    cy.visit(url);

    // Accept cookies
    homePageObj.clickAcceptPreferences();
  });

  it('Navigates to Celebrities born yesterday and takes a screenshot', () => {

    // Unfold the Menu
    homePageObj.clickUnfoldTheMenu();

    // Click on Celebs
    homePageObj.clickOnCelebs();

    // Click on Born Today section
    homePageObj.clickOnBornToday();

    // Delete default search text
    bornTodayPageObj.clickOnDeleteDefaultSearch();

    // Unfold Birthday dropdown
    bornTodayPageObj.clickOnBirthdayDropdown();

    // Enter yesterday's date in the text field 
    bornTodayPageObj.enterYesterdaysDate();

    // Click on See results
    bornTodayPageObj.clickOnSeeResults();

    // Wait for the list to load and click on the 3rd name
    bornTodayPageObj.clickOnThe3rdNameFromTheList();

    // Take a screenshot
    cy.screenshot('celebrity_born_yesterday');
  });
});
