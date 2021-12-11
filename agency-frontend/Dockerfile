FROM node:lts-alpine
RUN yarn global add http-server
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
CMD ["yarn", "build"]
COPY . .
EXPOSE 8080
CMD ["yarn", "start"]