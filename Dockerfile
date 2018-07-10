###############################################################################
# TODO Remove this once apollo-server-koa@rc has been tagged
###############################################################################

FROM node:10 as vendor

ENV VENDOR_DIR=/tmp/apollo-server

COPY ./vendor/apollo-server/ ${VENDOR_DIR}

RUN cd ${VENDOR_DIR} && npm install --unsafe-perm && npm run compile

###############################################################################
# End TODO
###############################################################################

FROM node:10-alpine

EXPOSE 8000

ARG NODE_ENV

ENV APP_DIR=/opt/ruelala/app
ENV NODE_ENV=${NODE_ENV:-production}
ENV PM2_LOG_DIR=/var/log/ruelala/storemanager

RUN adduser -D -g '' -G root app

# Make sure the log directory exists
RUN mkdir -p ${PM2_LOG_DIR}
RUN chown app:root ${PM2_LOG_DIR}

USER app

COPY --chown=app:root ./package.json ./package-lock.json ${APP_DIR}/

WORKDIR ${APP_DIR}

# Build the ${NODE_ENV} dist using the build dev dependencies
# These will be cleaned up later if we're building a production image
# Ideally, however, we're doing a two-step process in something like travis ci for non dev images:
# 1. Create dev environment, run tests (done in travis.yaml)
# 2. Build production dist in that env and build image, pulling in the dist into the image
RUN NODE_ENV=development npm install

###############################################################################
# TODO Use this when we get rid of vendor
# COPY . ${APP_DIR}/
###############################################################################

###############################################################################
# TODO Remove this once apollo-server-koa@rc has been tagged
###############################################################################
COPY --chown=app:root ./config                         ${APP_DIR}/config/
COPY --chown=app:root ./src                            ${APP_DIR}/src/
COPY --chown=app:root ./.babelrc                       ${APP_DIR}/
COPY --chown=app:root ./index.js                       ${APP_DIR}/
COPY --chown=app:root ./process.config.js              ${APP_DIR}/
COPY --chown=app:root ./webpack.config.js              ${APP_DIR}/
COPY --chown=app:root --from=vendor /tmp/apollo-server ${APP_DIR}/vendor/apollo-server
###############################################################################
# End TODO
###############################################################################

RUN npm run compile

# Run an install to ensure that node_modules is properly cleaned for the target env
# If we are building a development image, then this is a no-op since we installed dev dependencies.
# However, if we are building a production image, then this will remove all dev dependencies
RUN npm install

CMD ["npm", "start"]
