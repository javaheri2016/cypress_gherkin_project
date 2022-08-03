import homePageLinks from '../pageObjects/homePageLinks'
import shopPage from '../pageObjects/shopPage'

describe('1. User visit diffrent pages on javaheri.pl', () => {
    const l = new homePageLinks()
    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')

    it('Test 1.1 - User visits Home Page and .....', () => {
        l.homepage()
        l.AcceptCookies().click()
        cy.title().should('eq', 'JavaScript End to End Testing Framework | cypress.io testing tools')  //Verify Page Title with exact & full text
        cy.title().should('include', 'JavaScript')     //Verify Page Title with partial text
        l.howitworkspagelink().click()
        cy.title().should('eq', 'JavaScript End to End Testing Framework | cypress.io testing tools')  //Verify Page Title with exact & full text
        cy.title().should('include', 'End to End')     //Verify Page Title with partial text
    })

    it('1.2 - User visit XXX page and check for the price XXX', () => {
        l.homepage()
        l.pricingpagelink().click()
        l.AcceptCookies().click()
        cy.title().should('eq', 'Pricing For Cypress Testing Framework | cypress.io testing tools')  //Verify Page Title with exact & full text
        cy.title().should('include', 'Pricing')     //Verify Page Title with partial text
        const p = new pricingPageLinks()
        p.teamtab().click()
        p.businesstab().click()
    })
})