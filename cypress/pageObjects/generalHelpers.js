import 'cypress-if'
class generalHelpers {
    containsExpectedText(expectedText) {
        cy.contains(expectedText).should("be.visible");
    }
    elementIsVisible(expectedElement) {
        cy.get(expectedElement).should("be.visible");
    }
    closeCookies() {
        cy.get('.tplis-cl-button-accept')
        .if('visible').click()
        .else()
    }
}
export default generalHelpers

