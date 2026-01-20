describe('Acessar o sistema PJE', () => {

   //beforeEach(() => {
  //cy.loginUnificada()

     })
  


   it.skip('1 - Acessar o sistema PJE', () => {
  
  cy.viewport(1920, 1080);
  //cy.visit('https://sso.stg.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjpe-1g&redirect_uri=https%3A%2F%2Fhomologacao-pje.app.tjpe.jus.br%2Fh06-1g%2Flogin.seam&state=61a10a32-6e33-4575-8690-0f388b0057bf&login=true&scope=openid')
  cy.visit('https://homologacao-pje.app.tjpe.jus.br/h06-1g/home.seam')
  cy.get('span.navbar-brand-title').should('have.text', 'Processo Judicial Eletrônico');
  cy.get('#navbarItens a[data-bs-target="#waysAccessModal"]').should('have.text', 'Formas de Acesso');
  cy.get('#navbarItens a[href="https://homologacao-pje.app.tjpe.jus.br/h06-1g/ConsultaPublica/listView.seam"]').should('have.text', 'Consulta Processual');
  cy.get('#navbarItens a[href="https://homologacao-pje.app.tjpe.jus.br/h06-1g/Push/loginPush.seam"]').should('have.text', 'Push');
  cy.get('#navbarItens a[data-bs-target="#manualsModal"]').should('have.text', 'Manuais');
  cy.get('#navbarItens a[data-bs-target="#contactUsModal"]').should('have.text', 'Fale Conosco');
  cy.get('p.sistema').should('have.text', 'Processo Judicial Eletrônico 1º Grau');
  cy.get('p.sub-sistema').should('have.text', 'Poder Judiciário de Pernambuco');
  cy.get('[name="username"]').click();
  cy.get('[name="username"]').type('02112357417');
  cy.get('[name="password"]').click();
  cy.get('[name="password"]').type('tjpe1917');
  cy.get('#kc-login').click();
  cy.wait(12000)
 
  cy.visit('https://homologacao-pje.app.tjpe.jus.br/h06-1g/home.seam')
 // cy.get('.botao-menu').click();
  //cy.get('a.botao-menu').click();
 // cy.get('.botao-menu').should('be.visible').click();
//  cy.contains('a', 'Abrir menu').click()
 //cy.get('.botao-menu[title="Abrir menu"]').click();
 // cy.contains('Abrir menu').click();
 cy.get('.botao-menu').contains('Abrir menu').click();





   })

