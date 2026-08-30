# Usa uma imagem oficial do Node.js mais leve (alpine)
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia apenas os arquivos de dependência primeiro (otimiza o cache do Docker)
COPY package*.json ./

# Instala as dependências (apenas as de produção)
RUN npm install --only=production

# Copia o restante do código da aplicação
COPY . .

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]