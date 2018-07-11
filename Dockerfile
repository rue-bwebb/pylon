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

COPY --chown=app:root . ${APP_DIR}/

RUN npm run compile

# Run an install to ensure that node_modules is properly cleaned for the target env
# If we are building a development image, then this is a no-op since we installed dev dependencies.
# However, if we are building a production image, then this will remove all dev dependencies
RUN npm install

CMD ["npm", "run", "process"]
