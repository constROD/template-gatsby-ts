FROM node:17-alpine3.14 AS builder

# Create /app folder and add permission on the /app folder.
RUN mkdir -p /app && chmod -R 775 /app

# Go to /app folder.
WORKDIR /app

# Copy all required files from the repository for building the application.
COPY gatsby-browser.js gatsby-browser.js
COPY gatsby-config.js gatsby-config.js
COPY gatsby-ssr.js gatsby-ssr.js
COPY WrapRootElement.tsx WrapRootElement.tsx
COPY tsconfig.json tsconfig.json
COPY package.json package.json
COPY src src

# Install dependencies and build the application.
RUN yarn && yarn build

FROM nginx:1.19.6-alpine

# Copy public folder from --builder or /app.
COPY --from=builder /app/public /usr/share/nginx/html

# Set PORT to 80
EXPOSE 80

# Start the application.
CMD ["nginx", "-g", "daemon off;"]