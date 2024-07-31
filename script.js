describe('Compact Gallery Tests', () => {
    it('tests gallery heading and structure', () => {
        cy.get('h2').should('have.text', 'Cards Gallery');
        cy.get('.container .row').should('have.length', 1);
    });

    it('tests tags within cards', () => {
        const tags = ['img', 'h6', 'p'];
        tags.forEach(tag => {
            cy.get(tag).should('have.length', 6);
        });
    });

    it('tests card classes', () => {
        cy.get('.card').should('have.length.at.least', 6).within(() => {
            cy.get('.card-body').should('exist');
        });
        cy.get('a.lightbox').should('have.length.at.least', 6);
    });

    it('tests styling', () => {
        const tags = ['h2', 'h6', 'p'];
        tags.forEach(tag => cy.get(tag).should('have.css', 'text-align', 'center'));
        cy.get('.card').should('have.css', 'border-radius', '10px');
    });
});
