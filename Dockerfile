FROM node:10

ARG NODE_ENV

ENV APP_DIR=/opt/ruelala/app
ENV NODE_ENV=${NODE_ENV:-production}

EXPOSE 3000

# Make sure the log directory exists
RUN mkdir -p /var/log/ruelala/storemanager

COPY . ${APP_DIR}/
WORKDIR ${APP_DIR}

RUN npm install --no-optional

CMD ["npm", "start"]