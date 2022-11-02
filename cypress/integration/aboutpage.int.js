import { When, Then, Given, And } from '@badeball/cypress-cucumber-preprocessor';
import aboutPageElems from '../pageObjects/aboutPage';
import homePageElems from '../pageObjects/homePage';

const l = new homePageElems()
const ab = new aboutPageElems()

Given("User opens O mnie page", () => {
    ab.aboutPage()
});

Then("User expands all arrows from the table", () => {
    cy.get('.elementor-toggle-item').each(($el) => {
        const cy$el = cy.wrap($el);
        cy$el.click();
        cy$el.get('.elementor-tab-content').should('be.visible');
    });
})