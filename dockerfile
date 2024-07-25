# Usa una imagen base de Node.js
FROM node:22

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package*.json ./
RUN npm install

COPY . .

# Expon el puerto en el que la app se ejecuta
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
