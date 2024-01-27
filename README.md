# Automação API - Vtex

Este é o projeto de estudo em automação com implementação das APIs VTEX.

## Descrição do Projeto

- Projeto de testes de automação de API vtex, que tem como objetivo,
  ampliar o conhecimento das APIs vtex.

### Pré-Requisitos

- NodeJS.
- Editor de Texto (Vscode, Atom, Notepad++, Sublime, etc...)
- NPM
- git

### Instalação

- Abra o terminal e navegue até o diretório onde deseja clonar o repositório do GitHub. Em seguida, execute o seguinte comando:
 `git clone https://github.com/gersoncdias/automacao_-cypress_api_vtex.git`
- Entre no diretório do projeto recém-clonado usando o comando: 
`cd nome-repositorio`
- Edite o arquivo cypress_exemplo.env.json para cypress.env.json e insera seus dados
- Execute o seguinte comando para instalar as dependências do projeto, incluindo o Cypress: `npm i`

### Execução dos testes

NO  pronpt de comando:
Navegar até a pasta do projeto e execute um dos comando abaixo:

`npx cypress open`: Abrira a IDE do Cypress e apartir de lá executar os testes

`npx cypress run --reporter null` : executar os testes em headless
`npx cypress run --reporter null --spec cypress/integration/exemplo.spec.js` : executar os testes de arquivo específico em headless

### Plugins

- [cypress-plugin-api](https://www.npmjs.com/package/cypress-plugin-api)
- [cypress-plugin-xhr-toggle](https://www.npmjs.com/package/cypress-plugin-xhr-toggle)
