###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:slim as development
ARG NODE_ENV=development
ENV NODE_ENV ${NODE_ENV}

# Add a work directory
WORKDIR /usr/src/app

# Cache and Install dependencies
COPY --chown=node:node ./backend/package.json ./
COPY --chown=node:node ./backend/package-lock.json ./
RUN npm ci

# Copy app files
COPY --chown=node:node ./backend/ ./

# Install dev run dependencies
RUN npm i -g nodemon
# Expose port
EXPOSE 3000
# Start the app
USER node
CMD [ -d "node_modules" ] && nodemon || npm ci && nodemon

###################
# BUILD FOR PRODUCTION
###################

FROM node:current-alpine as build
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Add a work directory
WORKDIR /usr/src/app

# Copy package.json
COPY --chown=node:node ./backend/package.json ./
COPY --chown=node:node ./backend/package-lock.json ./

# Copy node_modules from development stage
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

#Copy and build project files
COPY --chown=node:node ./backend/ ./
RUN npm run build

# Set NODE_ENV environment variable
ENV NODE_ENV production

# run `npm ci` to remove existing node_modules with --only-production
RUN npm ci --only-production && npm cache clean --force
USER node

###################
# PRODUCTION
###################

FROM node:19.6-alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
