FROM node:lts-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
EXPOSE 45486
RUN chown -R node /app
USER node
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
# CMD ["tail", "-f", "/dev/null"]
