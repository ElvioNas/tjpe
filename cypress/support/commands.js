// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
  
    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
   // cy.preencherCPF('02112357417');
    cy.wait(5000)
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
    cy.wait(2000)
  })

  Cypress.Commands.add('loginUnificada', () => {
  
    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadas.app.tjpe.gov.br/')
  })

