# 🚀 Node.js CI/CD Pipeline

![GitHub Actions Status](https://github.com/kauacovre/cicd-node-app/actions/workflows/deploy.yml/badge.svg)
![Node.js](https://img.shields.io/badge/Node.js-24-green)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)

## 📌 Sobre o Projeto
Este projeto prático demonstra a implementação de uma cultura **DevOps** através da construção de um pipeline completo de Integração e Entrega Contínuas (CI/CD). O objetivo principal é automatizar testes, garantir a qualidade do código e padronizar o empacotamento da aplicação para ambientes de produção.

## ⚙️ Arquitetura do Pipeline

A automação foi configurada utilizando o **GitHub Actions**, dividida nas seguintes etapas:

1. **Trigger:** Disparo automático a cada `push` ou `pull request` na branch `main`.
2. **Continuous Integration (CI):** 
   - Provisionamento de um ambiente efêmero Ubuntu.
   - Instalação limpa de dependências (`npm install`).
   - Execução de testes automatizados com o framework **Jest**. (O pipeline é interrompido caso algum teste falhe, garantindo a integridade da branch principal).
3. **Continuous Delivery (CD):**
   - Construção automatizada (Build) da imagem Docker.
   - Autenticação segura via GitHub Secrets.
   - Envio (Push) da imagem versionada para o registro do **Docker Hub**.

## 🛠️ Tecnologias Utilizadas
* **Backend:** Node.js, Express
* **Testes:** Jest, Supertest
* **Containerização:** Docker, Docker Hub
* **Automação:** GitHub Actions
* **Versionamento:** Git & GitHub

## 💻 Como executar localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/kauacovre/cicd-node-app.git](https://github.com/kauacovre/cicd-node-app.git)


** Este conteúdo foi gerado por IA