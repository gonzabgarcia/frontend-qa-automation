# Dockerfile for Frontend
# Usa una imagen base de Node.js 22
FROM node:22

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de configuración de npm y instala las dependencias
COPY package*.json ./
RUN npm install

# Copia todos los archivos del proyecto al contenedor
COPY . .

# Expone el puerto en el que la aplicación estará disponible
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
