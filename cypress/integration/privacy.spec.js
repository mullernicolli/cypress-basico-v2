it('testa a página da política de privacidade de forma independente', () => {
    cy.visit('./src/privacy.html')

    cy.contains('CAC TAT - Política de privacidade').should('be.visible')
    cy.get('#white-background p')
    .first()
    .should('be.visible', 'Não salvamos dados submetidos no formulário da aplicação CAC TAT.')
    .last()
    .should('be.visible', 'Talking About Testing')

    cy.contains('p', 'Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real.').should('be.visible')
    
})