# Etapa 1: Build
FROM node:18-alpine AS builder

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY package*.json ./
COPY vite.config.* ./
COPY . .

# Instalar dependencias
RUN npm install

# Compilar el proyecto
RUN npm run build

# Etapa 2: Servidor
FROM nginx:alpine

# Copiar archivos compilados al directorio de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 5010
EXPOSE 5010

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]