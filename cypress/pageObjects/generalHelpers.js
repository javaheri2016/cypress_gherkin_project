class generalHelpers {
    containsExpectedText(expectedText) {
        cy.contains(expectedText).should("be.visible");
    }
    elementIsVisible(expectedElement) {
        cy.get(expectedElement).should("be.visible");
    }
}
export default generalHelpers

