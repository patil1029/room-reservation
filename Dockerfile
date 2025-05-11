# Use Node Alpine for a lightweight image
FROM node:20.19-alpine

# Set working directory
WORKDIR /app

# Install dependencies (optional cache optimization)
COPY package.json yarn.lock ./
RUN yarn

# Copy source code (will be overwritten by volume in docker-compose)
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start Vite development server
CMD ["yarn", "dev", "--host"]