import { When, Then, Given, And } from '@badeball/cypress-cucumber-preprocessor';

Given("User opens 'javaheri.pl' website", () => {
    cy.visit("https://javaheri.pl/");
});

When("User clicks on the 'Projekty' button from header", () => {
    cy.get('#prime_nav li.menu-item-35 a').click();
});

Then("User see text 'Zrealizowane strony'", () => {
    cy.contains('Zrealizowane strony').should("be.visible");
});

And("User clicks on all realized projects", () => {
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