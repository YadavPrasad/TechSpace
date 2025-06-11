FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

COPY . .

EXPOSE 8001

CMD ["nodemon", "--legacy-watch", "index.js"]

