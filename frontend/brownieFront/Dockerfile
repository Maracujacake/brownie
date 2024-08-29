# Use uma imagem base com Node.js
FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código fonte
COPY . .

# Compila o aplicativo Angular
RUN npm run build

# Expõe a porta que a aplicação irá rodar
EXPOSE 4200

# Comando para rodar o aplicativo
CMD ["npm", "start"]