describe('Submission form', () => {
    it('it does not submit empty fields', () => {
        cy.visit('/');
        cy.get('#submit_form').click();
        cy.get('.submitted').should('not.be.visible');
    })
})