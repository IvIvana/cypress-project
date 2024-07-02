import bornTodayPage from "../pageobject/bornTodayPage";
import homePage from "../pageobject/homepage";

describe('IMDb Born 40 Years Ago Section Test', () => {

  const homePageObj = new homePage();
  const bornTodayPageObj = new bornTodayPage();
  const url = 'https://www.imdb.com';

  before(() => {
    // Visit IMDb homepage
    cy.visit(url);

    // Accept cookies
    homePageObj.clickAcceptPreferences();
  });

  it('Navigates to Celebrities born 40 years ago, clicks on the first from the list, and takes a screenshot', () => {

    // Unfold the Menu
    homePageObj.clickUnfoldTheMenu();

    // Click on Celebs
    homePageObj.clickOnCelebs();

    // Click on Born Today section
    homePageObj.clickOnBornToday();

    // Delete default search text
    bornTodayPageObj.clickOnDeleteDefaultSearch();

    // Unfold Birth Date dropdown
    bornTodayPageObj.clickOnBirthDateDropdown();

    // Enter "From" date exactly 40 years ago
    bornTodayPageObj.enterFromDateExactly40YearsAgo();

    // Enter "To" date 
    bornTodayPageObj.enterToDateExactly40YearsAgo();

    // Click See results
    bornTodayPageObj.clickOnSeeResults();

    // Wait for the list to load and click on the 1st result
    bornTodayPageObj.clickOnThe1stNameFromTheList();

    // Take a screenshot
    cy.screenshot('celebrity_40_years_ago');

  });
});


