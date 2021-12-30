describe('Edit', () => {

   beforeEach(() => {
      cy.visit('/edit/1')
   });

   it('should allow viewing a person', () => {
      cy.get('h3').should('have.text', 'Nikola Jokic');
      cy.get('#name').should('have.value', 'Nikola Jokic');
      cy.get('#street').should('have.value', '2000 16th Street');
      cy.get('#city').should('have.value', 'Denver');
   });
});