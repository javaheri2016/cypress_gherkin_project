import{ When, Then, Given} from '@badeball/cypress-cucumber-preprocessor';
import homePageElems from '../pageObjects/homePage';
import generalHelpers from '../pageObjects/generalHelpers';
import blogPageElems from '../pageObjects/blogPage';

const l = new homePageElems()
const h = new generalHelpers()
const bl = new blogPageElems()

Given("User opens 'javaheri.pl' website", () => {
    cy.visit("https://javaheri.pl/");
});

Then( "I should see a text",() => {
    cy.contains("Katarzyna Javaheri-Szpak").should("exist");
}
);

When("User clicks on the O mnie button from header", () => {
    l.aboutHeader()
});

When("User clicks on the Kontakt button from header", () => {
    l.contactHeader()
});

When("User clicks on the Blog button from header", () => {
    l.blogHeader()
});

When("User clicks on the Projekty button from header", () => {
    l.projectsHeader()
});

When("User clicks on the Dowiedz się button from header", () => {
    l.projectsHeader()
});

Then("User see text Kursy i osiągnięcia", () => {
    h.containsExpectedText('Kursy i osiągnięcia')
});

Then("User see text Zwykle odpowiadam", () => {
    h.containsExpectedText('zwykle odpowiadam w ciągu 180 minut')
});

Then("User see text Zrealizowane strony", () => {
    h.containsExpectedText('Zrealizowane strony')
});

Then("User see text Czytaj dalej", () => {
    h.elementIsVisible(bl.readMoreBtn)
});