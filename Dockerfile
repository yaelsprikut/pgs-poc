FROM node:14 as build

# Create app directory
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.15
COPY --from=build /app/build/ /usr/share/nginx/html
EXPOSE 80