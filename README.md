<p align="center">
<a href="https://sonarcloud.io/dashboard?id=api-projetointegrador4" target="blank"><img src="https://sonarcloud.io/images/project_badges/sonarcloud-white.svg" alt="Sonar Cloud" /></a>
</p>

# Projeto Integrador 4 - API

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=api-projetointegrador4&metric=alert_status)](https://sonarcloud.io/dashboard?id=api-projetointegrador4)[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=api-projetointegrador4&metric=coverage)](https://sonarcloud.io/dashboard?id=api-projetointegrador4)[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=api-projetointegrador4&metric=bugs)](https://sonarcloud.io/dashboard?id=api-projetointegrador4)[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=api-projetointegrador4&metric=code_smells)](https://sonarcloud.io/dashboard?id=api-projetointegrador4)[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=api-projetointegrador4&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=api-projetointegrador4)[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=api-projetointegrador4&metric=security_rating)](https://sonarcloud.io/dashboard?id=api-projetointegrador4)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<p align="center">
   Uma aplicação desenvolvida em <a href="https://github.com/Microsoft/TypeScript">Typescript</a> usando <a href="http://nestjs.com/">Nestjs Framework</a>
</p>

## Description

Web Service para intermediar o acesso ao [banco de dados](https://www.elephantsql.com/) para o [projeto integrador 4](https://github.com/NaturesProphet/projetointegrador4)

## Installation

```bash
$ npm install
```
Para testar a aplicação, crie um arquivo .env na raiz do projeto conforme o formato do .env.example disponível na raiz e aponte as variaveis para seu ambiente.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test
O teste automático deste serviço não possui mocks, funciona com acesso direto a um banco. 

Antes de executar o teste, prepare o ambiente com o banco de testes devidamente criado (Depende de Docker instalado).

Certifique-se de ter um arquivo .env configurado antes desses passos.
```bash
npm run postgre:test
npm start
```
Após o ambiente de teste preparado, basta chamar o teste automático.
```bash
# Todos os testes
$ npm run test

# gera dados de cobertura de testes
$ npm run test:cov
```
