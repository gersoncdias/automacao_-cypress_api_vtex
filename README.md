# Automação API - Vtex

Este é o projeto de estudo em automação Responsiva.

## Descrição do Projeto

- Projeto de testes de automação de API vtex, que tem como objetivo, 
 ampliar o conhecimento das APIs vtex.

### Instalação e Pré-Requisitos

- NodeJS.
- Editor de Texto (Vscode, Atom, Notepad++, Sublime, etc...)
- NPM
- git
- Instalar as dependencias do projeto: npm i
- Editar o arquivo cypress_exemplo.env.json para cypress.env.json e inserir seus dados

### Execução dos testes

Pronpt de comando:
Navegar até a pasta do projeto e executar um dos comando abaixo:

`npx cypress open` ou `npm run open`: Abrir a IDE do Cypress e apartir de lá executar os testes

`npx cypress run --reporter null` : executar os testes em headless
`npx cypress run --reporter null --spec cypress/integration/exemplo.spec.js` : executar os testes de arquivo específico em headless
