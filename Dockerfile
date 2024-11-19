# Usar la imagen de Node.js oficial como base
FROM node:18

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar los archivos del proyecto a /app
COPY . .

# Instalar las dependencias del proyecto
RUN npm install

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["node", "server.js"]
