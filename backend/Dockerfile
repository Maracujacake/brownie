# backend/Dockerfile

# Usando uma imagem Node.js como base
FROM node:18

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando o package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o código para dentro do container
COPY . .

# Expondo a porta que o backend usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "src/app.js"]
