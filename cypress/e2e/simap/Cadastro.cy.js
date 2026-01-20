describe('Sistema Simap | Cadastro', () => {

   it.skip( '1 - Menu | Cadastro', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(12000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(10000)
   
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/acompanhamento-gestor"] span.font-medium').click();
   cy.get('[data-cy="navbar"] a.font-medium span.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/ausencias"] span.font-medium').click();
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').click();
   cy.get('[data-cy="servidor"] [name="servidor"]').click();
   cy.get('[data-cy="servidor"] [name="servidor"]').type('02112357');
   cy.get('#input_filter_servidor_0 div.flex > div:nth-child(1)').click();
   cy.get('[data-cy="dataInicial"] input.p-element').click();
 //  cy.get('#pn_id_28_panel span[data-date="2026-01-12"]').click();
 //  cy.get('[data-cy="dataFinal"] input.p-element').click();
 //  cy.get('#pn_id_29_panel span[data-date="2026-0-12"]').click();
  // cy.get('#field_tipoAusencia span.p-element').click();
 //  cy.get('#field_tipoAusencia_0').click();
 //  cy.get('[data-cy="observacao"]').click();
 //  cy.get('[data-cy="observacao"]').type('teste de sistema');
//   cy.get('[data-cy="entityCreateSaveButton"]').click();
   cy.get('[data-cy="entityTable"] i.pi-pencil').click();
   cy.get('#field_tipoAusencia span.p-element').click();
   cy.get('#field_tipoAusencia_1').click();
   cy.get('[data-cy="entityCreateSaveButton"] span.w-full').click();
   cy.get('[data-cy="entityTable"] li[ptooltip="Excluir"] a.flex').click();
   cy.get('[data-cy="entityConfirmDeleteButton"] span').click();
   cy.get('[data-cy="entityCreateButton"]').click();
   cy.get('[data-cy="servidor"] [name="servidor"]').click();
   cy.get('[data-cy="servidor"] [name="servidor"]').type('02112357417');
   cy.get('#input_filter_servidor_0 div.flex > div:nth-child(1)').click();
   cy.get('#field_tipoAusencia span.p-element').click();
   cy.get('#field_tipoAusencia_3').click();
   cy.get('[data-cy="observacao"]').click();
   cy.get('[data-cy="observacao"]').type('teste de sistema');
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   cy.get('#pn_id_54_panel span[data-date="2026-0-12"]').click();
   cy.get('[data-cy="dataFinal"] input.p-element').click();
   cy.get('#pn_id_55_panel span[data-date="2026-0-12"]').click();
   cy.get('[data-cy="observacao"]').click();
   cy.get('[data-cy="entityCreateSaveButton"] span.p-button-label').click();
   cy.get('svg.p-toast-icon-close-icon').click();
   cy.get('[data-cy="navbar"] a.font-medium span.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/distribuicao"] span.font-medium').click();
   cy.get('[data-cy="entityCreateButton"]').click();
   cy.get('[data-cy="descricao"]').click();
   cy.get('[data-cy="descricao"]').type('teste de sistema');
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   cy.get('#pn_id_118_panel span[data-date="2026-0-12"]').click();
   cy.get('[data-cy="dataFinal"] input.p-element').click();
   cy.get('#pn_id_119_panel span[data-date="2026-0-12"]').click();
   cy.get('[data-cy="qtdDiasUteis"]').click();
   cy.get('[data-cy="qtdDiasUteis"]').type('1');
   cy.get('[data-cy="observacao"]').click();
   cy.get('[data-cy="observacao"]').type('teste');
   cy.get('[data-cy="entityCreateSaveButton"] span.p-button-label').click();
   cy.get('tr[data-cy="entityTable"]:nth-of-type(1) i.pi-sliders-h').click();
   cy.get('div:nth-child(3) > div:nth-child(2) > div.items-center > button:nth-child(2)').click();
   cy.get('button.p-link').click();
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/distribuicao"] span.font-medium').click();
   cy.get('tr[data-cy="entityTable"]:nth-of-type(1) li[ptooltip="Editar"] a.flex').click();
   cy.get('[data-cy="dataFinal"] input.p-element').click();
   cy.get('#pn_id_235_panel span[data-date="2026-0-13"]').click();
   cy.get('[data-cy="entityCreateSaveButton"] span.p-button-label').click();
   cy.get('div.justify-between').click();
   cy.get('div.p-toast-message-content').click();
   cy.get('svg.p-toast-icon-close-icon').click();
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/meta-diretoria"]').click();
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/historico-servidor-processo"] span.font-medium').click();
   cy.get('[data-cy="navbar"] li.dropdown.ng-star-inserted a.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/servidor"]').click();
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').click();
   cy.get('p-dropdown.p-inputwrapper-filled').click();
   cy.get('#field_nucleoDiretorianucleoIdin span.p-element').click();
   cy.get('#field_nucleoDiretorianucleoIdin_1').click();
   cy.get('[data-cy="nome"]').click();
   cy.get('[data-cy="nome"]').click();
   cy.get('[data-cy="nome"]').click();
   cy.get('[data-cy="nome"]').type('41864287004');
   cy.get('#field_regimeTrabalho span.p-element').click();
   cy.get('#field_regimeTrabalho_0').click();
   cy.get('[data-cy="cpf"] [name="cpf"]').click();
   cy.get('[data-cy="cpf"] [name="cpf"]').clear();
   cy.get('[data-cy="cpf"] [name="cpf"]').type('418.642.870-04');
   cy.get('[data-cy="nome"]').click();
   cy.get('[data-cy="nome"]').clear();
   cy.get('[data-cy="nome"]').type('sergio brito de oliveira');
   cy.get('#locale-brasil').click();
   cy.get('#locale-brasil').click();
   cy.get('#locale-brasil').type('80,00');
   cy.get('#locale-brasil').clear();
   cy.get('#locale-brasil').type('9,00');
   cy.get('div.p-focus span.p-element').click();
   cy.get('#field_diretoria_1 div.flex').click();
   cy.get('#field_vara span.p-element').click();
   cy.get('#field_vara_1').click();
   cy.get('[data-cy="entityCreateSaveButton"] span.p-button-label').click();
   cy.get('[data-cy="navbar"] li.dropdown.ng-star-inserted a.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/vara-diretoria"] span.font-medium').click();
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').click();
   cy.get('#field_idUnidadeJudiciaria div.p-dropdown-trigger').click();
   cy.get('#field_idUnidadeJudiciaria_0 div.flex').click();
   cy.get('p-dropdown.w-full').click();
   cy.get('p-dropdown.w-full').click();
   cy.get('[data-cy="entityCreateSaveButton"]').click();
   })
})