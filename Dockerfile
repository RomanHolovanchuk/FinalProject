# Етап 1: Збірка React
FROM node:18-alpine AS build
# Приймаємо аргумент з Jenkins
ARG REACT_APP_SECRET_KEY
ENV REACT_APP_SECRET_KEY=$REACT_APP_SECRET_KEY

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Етап 2: Запуск через Nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]