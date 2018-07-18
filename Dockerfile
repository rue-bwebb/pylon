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
# later if we're build ing a production imagex
RUN npm ci --production=false

FROM build as test

# TODO be specific about what we're copying here!
COPY --chown=app:root . ${APP_DIR}/

CMD ["npm", "test"]

FROM test

# If we're in NODE_ENV=production, clean up the dev dependencies
RUN npm ci

# Build the <NODE_ENV> dist/bundle
RUN npm run compile

CMD ["npm", "run", "process"]
