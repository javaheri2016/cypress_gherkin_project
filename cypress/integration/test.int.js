import{ When, Then} from '@badeball/cypress-cucumber-preprocessor';

When ("I visit javaheri.pl", ()=> {
    cy.visit("https://javaheri.pl/");

});
Then( "I should see a text",() => {
    cy.contains("Katarzyna Javaheri-Szpak").should("exist");
}
);