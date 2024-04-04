# Use the nodejs image as base
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the source code into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port that the application runs on
EXPOSE 9800

# Start the application
CMD ["npm", "run", "dev"]
