FROM node:10-alpine as build

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

# Install all dependencies. This is required for testing and will be cleaned up
# later if we're building a production image
RUN npm ci --production=false

FROM build as test

COPY --chown=app:root ./.babelrc  ${APP_DIR}/
COPY --chown=app:root ./config    ${APP_DIR}/config
COPY --chown=app:root ./src       ${APP_DIR}/src
COPY --chown=app:root ./test      ${APP_DIR}/test

CMD ["npm", "test"]

FROM test as dev

COPY --chown=app:root ./index.js          ${APP_DIR}/
COPY --chown=app:root ./process.config.js ${APP_DIR}/
COPY --chown=app:root ./webpack.config.js ${APP_DIR}/

# Build the <NODE_ENV> dist/bundle
RUN npm run compile

CMD ["npm", "run", "process"]

FROM dev

# If we're in NODE_ENV=production, clean up the dev dependencies
RUN npm ci --production=true

# Clean up non-production resources to shrink the container size
RUN rm -rf test
RUN rm .babelrc
RUN rm webpack.config.js
