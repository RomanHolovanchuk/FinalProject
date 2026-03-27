# Етап 1: Збірка React
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV REACT_APP_API_KEY=61c15492fbmshdc35b3d5be6badep143eabjsndfe9b60370e4
RUN npm run build

# Етап 2: Запуск через Nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]