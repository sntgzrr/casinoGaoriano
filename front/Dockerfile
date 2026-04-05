# Multi-stage build for React Vite app

# Build stage
FROM node:20-alpine as build

# Accept build argument for API URL
ARG VITE_API_URL=$VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Runtime port for Railway
ARG PORT=8080
ENV PORT=${PORT}

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template

RUN apk add --no-cache gettext

EXPOSE ${PORT}

CMD ["sh", "-c", "envsubst '$$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'" ]