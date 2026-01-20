describe('Sistema Simap | Menu Label', () => {

   it.skip( '1 - Menu acompanhamento do gestor | Validar Label', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(12000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(10000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
   
   cy.get('[data-cy="navbar"] li.dropdown.ng-star-inserted a.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/acompanhamento-gestor"] span.font-medium').click();
   cy.get('[data-cy="navbar"] li.dropdown.ng-star-inserted a.font-medium').click();
   cy.get('[data-cy="AcompanhamentoGestorsHeading"] span').should('have.text', 'Acompanhamento do Gestor');
   cy.get('#entities th[jhisortby="diretoria.nome"] span.titulo-coluna').should('have.text', 'Diretoria');
   cy.get('#entities th[jhisortby="descricao"] span.titulo-coluna').should('have.text', 'Distribuição');
   cy.get('#entities th[jhisortby="dataInicial"] span.titulo-coluna').should('have.text', 'Período');
   cy.get('#entities th[jhisortby="distribuidos"] span.titulo-coluna').should('have.text', 'Qtd distribuídos');
   cy.get('#entities th[jhisortby="totalConcluido"] span.titulo-coluna').should('have.text', 'Qtd concluídos');
   cy.get('#entities th[jhisortby="percentagemConcluido"] span.titulo-coluna').should('have.text', 'Percentual Concluídos');
   cy.get('ol.p-breadcrumb-list').click();
   cy.get('button.block').should('have.text', '\n        \n        Filtros\n        \n        \n          1\n        \n        \n      ');
   cy.get('[data-cy="navbar"] li.dropdown.ng-star-inserted a.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/ausencias"] span.font-medium').click();
   cy.get('[data-cy="AusenciasHeading"] span').should('have.text', 'Ausências');
   cy.get('button.p-overlay-badge span.p-button-label').should('have.text', 'Filtros');
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').should('have.text', ' Nova Ausência ');
   cy.get('[data-cy="navbar"] a.font-medium span.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/distribuicao"] span.font-medium').click();
   cy.get('[data-cy="DistribuicaoHeading"] span').should('have.text', 'Distribuições');
   cy.get('button.p-overlay-badge span.p-button-label').should('have.text', 'Filtros');
   cy.get('[data-cy="entityCreateButton"]').should('have.text', '\n        \n         Criar nova Distribuição \n      ');
   cy.get('#entities th[jhisortby="diretoria.id"] span').should('have.text', 'Diretoria');
   cy.get('#entities th[jhisortby="descricao"] span').should('have.text', 'Descrição');
   cy.get('#entities th[jhisortby="dataInicial"] span').should('have.text', 'Data Inicial');
   cy.get('#entities th[jhisortby="dataFinal"] span').should('have.text', 'Data Final');
   cy.get('#entities th[jhisortby="distribuida"] span').should('have.text', 'Distribuída');
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/meta-diretoria"] span.font-medium').click();
   cy.get('[data-cy="MetaDiretoriaHeading"] span').should('have.text', 'Cadastro de Metas Diárias (Processos)');
   cy.get('button.block').should('have.text', '\n        \n        Filtros\n        \n        \n          1\n        \n        \n      ');
   cy.get('#entities th[jhisortby="diretoria.nome"] span').should('have.text', 'Diretoria');
   cy.get('#entities th[jhisortby="regimeTrabalho.descricao"] span').should('have.text', 'Regime de Trabalho');
   cy.get('#entities th[jhisortby="valorMeta"] span').should('have.text', 'Meta Diária (Processos)');
   cy.get('[data-cy="navbar"] a.font-medium span.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/historico-servidor-processo"] span.font-medium').click();
   cy.get('[data-cy="HistoricoServidorProcessoHeading"] span').should('have.text', 'Meus Processos');
   cy.get('span.p-button-label').should('have.text', 'Filtros');
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/servidor"] span.font-medium').click();
   cy.get('[data-cy="ServidorHeading"] span').should('have.text', 'Servidores');
   cy.get('button.p-overlay-badge span.p-button-label').should('have.text', 'Filtros');
   cy.get('[data-cy="entityDesableButton"] span.p-button-label').should('have.text', ' Ativar Selecionado(s) ');
   cy.get('[data-cy="entityEnableButton"] span.p-button-label').should('have.text', ' Desativar Selecionado(s) ');
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').should('have.text', ' Novo Servidor ');
   cy.get('#entities th[jhisortby="nome"] span').should('have.text', 'Nome');
   cy.get('#entities th[jhisortby="nucleoDiretoria.diretoria.nome"] span').should('have.text', 'Diretoria');
   cy.get('#entities th[jhisortby="nucleoDiretoria.nucleo.nome"] span').should('have.text', 'Núcleo');
   cy.get('#entities th[jhisortby="ativo"] span').should('have.text', 'Situação');
   cy.get('[data-cy="navbar"] a.font-medium span.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/vara-diretoria"] span.font-medium').click();
   cy.get('[data-cy="VaraDiretoriaHeading"] span').should('have.text', 'Mapeamento Vara e Diretoria');
   cy.get('button.p-overlay-badge span.p-button-label').should('have.text', 'Filtros');
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').should('have.text', ' Novo Mapeamento Vara e Diretoria ');
   cy.get('#entities th:nth-child(1) span').should('have.text', 'Vara');
   cy.get('#entities th:nth-child(2) span').should('have.text', 'Diretoria');
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').should('have.text', ' Novo Mapeamento Vara e Diretoria ');
   cy.get('button.p-overlay-badge span.p-button-label').should('have.text', 'Filtros');
   cy.get('[data-cy="navbar"] a.font-medium span.font-medium').click();
   })

})
