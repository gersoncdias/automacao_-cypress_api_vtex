# Vivara Responsivo - Ipad

Este é o projeto de estudo em automação Responsiva.

## Descrição do Projeto

- O projeto de testes de automação responsiva tem como objetivo validar as principais funções e telas do sistema, 
 garantindo a mais alta qualidade possível do produto. Os testes incluem a verificação de estilos, cores e 
 formatações CSS em cada página, garantindo consistência visual em todo o sistema.

### Instalação e Pré-Requisitos

#### Pré-requisitos:
- NodeJS.
- Editor de Texto (Vscode, Atom, Notepad++, Sublime, etc...)
- NPM
- git
- Instalar as dependencias do projeto: npm i

### Execução dos testes

Pronpt de comando:
Navegar até a pasta do projeto e executar um dos comando abaixo:

`npx cypress open` ou `npm run open`: Abrir a IDE do Cypress e apartir de lá executar os testes

`npx cypress run --reporter null` : executar os testes em headless
`npx cypress run --reporter null --spec cypress/integration/exemplo.spec.js` : executar os testes de arquivo específico em headless
