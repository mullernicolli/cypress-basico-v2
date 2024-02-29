Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Nicolli')
    cy.get('#lastName').type('Müller')
    cy.get('#email').type('nic@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})