# Use the official Node.js 18 image based on Alpine Linux
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Add these lines before the CMD or ENTRYPOINT directive
RUN npm install soap

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port on which the application will run
EXPOSE 8888

VOLUME ["/usr/src/app/data"]

# Command to run the application when the container starts
CMD ["npm", "start"]
