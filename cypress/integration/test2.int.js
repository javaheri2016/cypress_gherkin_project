import { When, Then, Given, And } from '@badeball/cypress-cucumber-preprocessor';

Given("User opens 'javaheri.pl' website", () => {
    cy.visit("https://javaheri.pl/");
});

When("User clicks on the 'O mnie' button from header", () => {
    cy.get('#prime_nav li.menu-item-37 a').click();
});

Then("User see text 'Kursy i osiągnięcia'", () => {
    cy.contains('Kursy i osiągnięcia').should("be.visible");
});

And("User expands all arrows from the table", () => {
    cy.get('.elementor-toggle-item').each(($el) => {
        const cy$el = cy.wrap($el);
        cy$el.click();
        cy$el.get('.elementor-tab-content').should('be.visible');
    });
})