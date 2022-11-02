class homePageElems {
   homepage() {
      return cy.visit('https://javaheri.pl')
   }
   aboutHeader() {
      return cy.get('#prime_nav li.menu-item-37 a').click()
   }
   projectsHeader() {
      return cy.get('#prime_nav li.menu-item-35 a').click();
   }
   blogHeader() {
      return cy.get('#prime_nav li.menu-item-155 a').click();
   }
   contactHeader() {
      return cy.get('#prime_nav li.menu-item-34 a').click();
   }
   learnMoreBtn() {
      return cy.get('.staticslider-button').click();
   }
 }
 
 export default homePageElems