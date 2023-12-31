FROM node

COPY app.js /home/app/index.js
COPY routes.js /home/app/routes.js

WORKDIR /home/app/

EXPOSE 3000

CMD ["node", "index.js"]