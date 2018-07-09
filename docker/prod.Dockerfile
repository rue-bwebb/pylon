FROM node:10-alpine as build

ENV APP_DIR=/opt/ruelala/app

COPY ./package.json ./package-lock.json ${APP_DIR}/
COPY ./vendor ${APP_DIR}/vendor

WORKDIR ${APP_DIR}

RUN NODE_ENV=development npm install --no-optional

###############################################################################
# TODO Remove this once apollo-server-koa@rc has been tagged
###############################################################################

RUN cd ./vendor/apollo-server && NODE_ENV=development npm install --no-optional && npm run compile

###############################################################################
# End TODO
###############################################################################

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV:-production}

EXPOSE 3000

COPY . ${APP_DIR}/
RUN npm run compile

ENTRYPOINT [ "npm" ]
CMD ["start"]
