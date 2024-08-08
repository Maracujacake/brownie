# Etapa de build do Angular
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa de servir o Angular (ambiente de desenvolvimento)
FROM node:18
WORKDIR /app
COPY --from=build /app /app
EXPOSE 4200
CMD ["npm", "start"]
