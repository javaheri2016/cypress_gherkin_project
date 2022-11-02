class blogPageElems {

    homepage() {
       return cy.visit('https://javaheri.pl/blog')
    }
    readMoreBtn() {
       return cy.get('a[class="continue-reading-link"]')
    }
 }
 
 export default blogPageElems