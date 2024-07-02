# cypress-project
This repository contains a comprehensive testing suite for both API and End-to-End (E2E) testing using Cypress. The project includes automated tests for the PokeAPI as well as UI tests for IMDb.

# PokeAPI Berry Tests
====================

## Description:
------------
This test suite is designed to validate the PokeAPI Berry endpoints. It includes tests to ensure that the API responds correctly to valid and invalid requests and can handle specific scenarios like finding the berry with the highest potency for a given flavor. 

## Notes:
------
- Tests can be found in API_spec.cy.js spec file.
- The tests use the `cy.request` method to make API calls and validate the responses.
- The `failOnStatusCode: false` option is used to handle expected error responses for invalid requests.
- The test suite assumes that the PokeAPI service is available and accessible at `https://pokeapi.co/`.
- If you encounter any issues, ensure that you have a stable internet connection and that the PokeAPI service is up and running.

# UI tests for IMDb
====================

## Description:
------------
This project contains automated UI tests for the IMDb website using Cypress. The tests cover various functionalities, including searching for actors, navigating to specific sections, rating movies, and more.
This project utilizes the Page Object Model (POM) design pattern that helps in reducing code duplication and improves test maintenance by creating Object Repositories for web UI elements.

## Project Structure

The project has the following structure:

- `cypress/`: Contains the Cypress tests and configurations.
  - `e2e/`: Contains the end-to-end test spec files.
    - `IMDbTVShowsPhotoNavigation_spec.cy.js`
    - `IMDbBornToday_spec.cy.js`
    - `IMDbBorn40YearsAgo_spec.cy.js`
    - `IMDBTopBoxOffice_spec.cy.js`
    - `IMDBNicolasCage_spec.cy.js`
  - 'fixtures/' 
  - `pageobject/`: Contains the page object classes.
    - `bornTodayPage.js`
    - `breakingBadPage.js`
    - `topBoxOfficePage.js`
    - `homePage.js`
    - `nicolasCagePage.js`
  - `screenshots/`: Contains test screenshots.
  - 'support'


