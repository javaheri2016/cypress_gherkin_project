import { When, Then, Given, And } from '@badeball/cypress-cucumber-preprocessor';
import { BrowserMultiFormatReader } from '@zxing/browser';
import homePageElems from '../pageObjects/homePage';

const l = new homePageElems()


Given("User opens 'javaheri.pl' website", () => {
    cy.visit("https://javaheri.pl/");
});

When("User clicks on the Kontakt button from header", () => {
    l.contactHeader()
});

When('User reads a QR code', () => {
    cy.get('img[alt="vCard"]')
    .then($el => {
        const img = $el[0];
        const image = new Image();
        image.width = img.width;
        image.height = img.height;
        image.src = img.src;
        image.crossOrigin = 'Anonymous';
        return image;
    })
    .then(image => {
        const reader = new BrowserMultiFormatReader();
        return reader.decodeFromImageElement(image[0])
    .then(result => {
        print(result.getText)
        expect(result.getText()).to.equal('Katarzyna Javaheri-Szpak');
        });
    });
  });

