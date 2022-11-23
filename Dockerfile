FROM node:16-alpine3.14 AS builder

# Environment Variables
ARG APP_ENV
ENV APP_ENV=${APP_ENV}

# Create /app folder and add permission on the /app folder.
RUN mkdir -p /app && chmod -R 775 /app

# Go to /app folder.
WORKDIR /app

# Copy all required files from the repository for building the application.
COPY gatsby-browser.js gatsby-browser.js
COPY gatsby-config.js gatsby-config.js
COPY gatsby-ssr.js gatsby-ssr.js
COPY WrapPageElement.tsx WrapPageElement.tsx
COPY WrapRootElement.tsx WrapRootElement.tsx
COPY tsconfig.json tsconfig.json
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY src src

# Install dependencies and build the application.
RUN echo ${APP_ENV} | base64 -d >.env
RUN yarn && yarn build

FROM nginx:1.19.6-alpine

# Copy public folder from --builder or /app.
COPY --from=builder /app/public /usr/share/nginx/html

# Set PORT to 80
EXPOSE 80

# Start the application.
CMD ["nginx", "-g", "daemon off;"]
