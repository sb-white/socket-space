# BUILD
FROM node:18.9.0 as build
WORKDIR /usr

COPY package.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install
RUN npm run build

# PROD
FROM node:18.9.0
WORKDIR /usr

COPY package.json ./
RUN npm install --only=production
# load compiled js files from build container
COPY --from=build /usr/dist .

EXPOSE 8000
CMD ["node","server.js"]