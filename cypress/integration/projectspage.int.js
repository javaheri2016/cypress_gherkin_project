import { When, Then, Given, And } from '@badeball/cypress-cucumber-preprocessor';
import homePageElems from '../pageObjects/homePage';
import projectPageElems from '../pageObjects/projectPage';

const l = new homePageElems()
const pr = new projectPageElems()

Given("User opens projects website", () => {
    pr.projectpage()
});

Then("User clicks on all realized projects", () => {
    let countLink = 0;
    let countWithoutLink = 0;
    cy.get('[data-id="a2f8e70"] .elementor-widget-image').each(($el) => {
        console.log($el);
        const linkEl = $el.find('a');
        if (linkEl.length) {
            countLink++;
        } else {
            countWithoutLink++;

        }
    }).then(() => {
        console.log({ countLink, countWithoutLink });
    });

});