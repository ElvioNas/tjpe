describe('Sistema Simap | Filtro', () => {

   it.skip( '1 - Menu | Filtro', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(12000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(30000)
   
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/acompanhamento-gestor"] span.font-medium').click();
   cy.get('span.p-button-label').click();
   cy.get('[data-cy="descricao"]').click();
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   cy.get('[data-cy="dataInicial"] input.p-element').type('01/08/2025');
   cy.get('[data-cy="dataFinal"] input.p-element').click();
   cy.get('#pn_id_25_panel span[data-date="2026-0-12"]').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.wait(2000)
   cy.get('[data-cy="entityTable"] i.pi-briefcase').click();
      cy.wait(2000)
   cy.get('[data-cy="ProcessoHeading"] span:nth-child(4)').should('have.text', ' Processos Distribuídos Por Servidor ');
   cy.get('#entities th[jhisortby="servidorNome"] span').should('have.text', 'Nome do Servidor');
   cy.get('#entities th[jhisortby="qtdProcessosTotal"] span').should('have.text', 'Quantidade de processos recebidos');
   cy.get('#entities th[jhisortby="qtdProcessosConcluido"] span').should('have.text', 'Quantidade de processos concluídos');
   cy.get('#entities th[jhisortby="percentualConcluido"] span').should('have.text', 'Percentual concluído');
   cy.get('[data-cy="entityDetailsBackButton"] span.w-full').click();
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/ausencias"]').click();
   cy.get('button.p-overlay-badge span.p-button-label').click();
   cy.get('#field_nucleoDiretoriaIdnucleoIdin div.p-dropdown-trigger').click();
   cy.get('#field_nucleoDiretoriaIdnucleoIdin_0').click();
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   cy.get('[data-cy="dataInicial"] input.p-element').type('01/07/2025');
   cy.get('[data-cy="dataFinal"] input.p-element').click();
   cy.get('#pn_id_44_panel span[data-date="2026-0-12"]').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('#field_nucleoDiretoriaIdnucleoIdin div.p-dropdown-trigger').click();
   cy.get('#field_nucleoDiretoriaIdnucleoIdin_1').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('#field_nucleoDiretoriaIdnucleoIdin svg.p-dropdown-trigger-icon').click();
   cy.get('#field_nucleoDiretoriaIdnucleoIdin_2').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   cy.get('[data-cy="dataInicial"] input.p-element').clear();
   cy.get('[data-cy="dataInicial"] input.p-element').type('01/05/2025');
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('#field_nucleoDiretoriaIdnucleoIdin svg.p-dropdown-trigger-icon').click();
   cy.get('#field_nucleoDiretoriaIdnucleoIdin_0').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('#field_tipoAusencia svg.p-dropdown-trigger-icon').click();
   cy.get('#field_tipoAusencia_1').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/distribuicao"] span.font-medium').click();
   cy.get('button.p-overlay-badge span.p-button-label').click();
   cy.wait(2000)
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   cy.wait(2000)
   cy.get('[data-cy="dataInicial"] input.p-element').type('01/05/2025');
   cy.get('[data-cy="dataFinal"] input.p-element').click();
   cy.get('#pn_id_112_panel span[data-date="2026-0-12"]').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('#entities th[jhisortby="diretoria.id"] span').should('have.text', 'Diretoria');
   cy.get('#entities th[jhisortby="descricao"] span').should('have.text', 'Descrição');
   cy.get('#entities th[jhisortby="dataInicial"] span').should('have.text', 'Data Inicial');
   cy.get('#entities th[jhisortby="dataFinal"] span').should('have.text', 'Data Final');
   cy.get('#entities th[jhisortby="distribuida"] span').should('have.text', 'Distribuída');
   cy.get('a.underline span').click();
   cy.get('[data-cy="navbar"] li.dropdown.ng-star-inserted a.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/meta-diretoria"] span.font-medium').click();
   cy.get('button.block').click();
   cy.get('#field_regimeTrabalho span.p-element').click();
   cy.get('#field_regimeTrabalho_0').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('#entities th[jhisortby="diretoria.nome"] span').should('have.text', 'Diretoria');
   cy.get('#entities th[jhisortby="regimeTrabalho.descricao"] span').should('have.text', 'Regime de Trabalho');
   cy.get('#entities th[jhisortby="valorMeta"] span').should('have.text', 'Meta Diária (Processos)');
   cy.get('#field_regimeTrabalho div.p-dropdown-trigger').click();
   cy.get('#field_regimeTrabalho_1').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('#field_regimeTrabalho div.p-dropdown-trigger').click();
   cy.get('#field_regimeTrabalho_2').click();
   cy.get('button.p-button-sm.p-button-rounded').click();
   cy.wait(2000)
   //cy.get('div.p-focus').click();

  // cy.get('#field_regimeTrabalho_3 span.ng-star-inserted').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
 //  cy.get('[data-cy="entityTable"] td:nth-child(2)').should('have.text', '\n              \n              Regime Diferenciado - 4h\n              ');
   cy.get('#field_regimeTrabalho div.p-dropdown-trigger').click();
   cy.get('#field_regimeTrabalho_2').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('[data-cy="entityTable"] td:nth-child(2)').should('have.text', '\n              \n              Presencial\n              ');
   cy.get('#field_regimeTrabalho svg.p-dropdown-trigger-icon').click();
   cy.get('#field_regimeTrabalho_1').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('[data-cy="entityTable"] td:nth-child(2)').should('have.text', '\n              \n              Parcial\n              ');
   cy.get('#field_regimeTrabalho span.p-element').click();
   cy.get('#field_regimeTrabalho_1').click();
   cy.get('#field_regimeTrabalho span.p-element').click();
   cy.get('#field_regimeTrabalho_0').click();
   cy.get('button.p-button-sm.p-button-rounded').click();
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/historico-servidor-processo"] span.font-medium').click();
   cy.get('button.block').click();
   //cy.get('#field_idUnidadeJudiciaria svg.p-dropdown-trigger-icon').click();
  // cy.get('#field_idUnidadeJudiciaria_0 div.flex > div').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.wait(2000)
   //cy.get('#field_idUnidadeJudiciaria_1').click();
      cy.wait(2000)
  // cy.get('button.p-button-sm.p-button-rounded').click();
   cy.get('#field_idUnidadeJudiciaria div.p-dropdown-trigger').click();
   cy.get('#field_idUnidadeJudiciaria_2 div.flex').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('[data-cy="navbar"] li.dropdown.ng-star-inserted a.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/servidor"]').click();
   cy.get('button.p-overlay-badge').click();
   cy.get('input[maxlength="250"]').click();
  // cy.get('input.p-filled').type('elvio');
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   //cy.get('[data-cy="entityTable"] div.p-checkbox-box').click();
  // cy.get('[data-cy="entityTable"] li[ptooltip="Editar"] a.flex').click();
  //cy.get('[data-cy="ServidorCreateUpdateHeading"]').should('have.text', 'Criar ou editar Servidor');
  // cy.get('[data-cy="entityCreateCancelButton"] span.w-full').click();
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/vara-diretoria"] span.font-medium').click();
   cy.get('button.p-overlay-badge span.p-button-label').click();
   cy.get('[data-cy="varaPreferencialCodPje"] #field_varaPreferencialCodPje').click();
   cy.get('#field_varaPreferencialCodPje svg.p-dropdown-trigger-icon').click();
   cy.get('#field_varaPreferencialCodPje svg.p-dropdown-trigger-icon').click();
   cy.get('#field_varaPreferencialCodPje_0 div.flex').click();
   cy.get('button.p-button-sm.p-button-rounded').click();
   cy.get('#field_varaPreferencialCodPje div.p-dropdown-trigger').click();
   cy.get('#field_varaPreferencialCodPje_1 div.flex').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   })
})