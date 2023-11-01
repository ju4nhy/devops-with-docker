FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV NODE_ENV=development
ENV REACT_APP_API_KEY=your_api_key_here

CMD ["npm", "start"]