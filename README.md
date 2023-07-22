# expressapiserver

The project sets up an express api server. based on the course on youtube : https://www.youtube.com/watch?v=qy8PxD3alWw
please also visit this one: https://www.youtube.com/watch?v=vDLE8hqzA8I
https://github.com/CodingGarden/intro-to-typescript/blob/examples/examples/express-api/src/app.ts

1. Deletes the dist folder and recreates it every time file changes
2. typescript compiler runs on watch mode
3. concurrently is letting run commands in parallel
4. Use routing to publish many more routes.

## run the project
npm run serve (this would run the preserve every time followed by serve)

## Logic for the build
build : first delete the folder and then run the typescript compiler.
prestart : run the build command
start: any time npm run start will be run, it will run the prestart before it. So start simply starts the express server from dist folder.
preserve : run the build command
serve: run in parallel first run typescript under watch, nodemon will then be watching dist/index.js and keep running under the new file. 

## dependencies
npm init -y
npm i typescript --save-dev
npm i express --save-dev
npm i cors --save-dev
npm i body-parser --save-dev

npm i @types/node --save-dev
npm i @types/express --save-dev
npm i @types/cors --save-dev
npm i @types/body-parser --save-dev

npm tsc --init
change the outdirectory to ./dist
npm install nodemon --save-dev
npm install rimraf --save-dev
npm install concurrently --save-dev


  "scripts": {
    "build": "rimraf dist && npx tsc",
    "prestart": "npm run build",
    "start": "node dist/index.js",
    "preserve": "npm run build",
    "serve": "concurrently \"tsc -w\"  \"nodemon dist/index.js\" ",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "express": "^4.18.2",
    "typescript": "^5.1.6"
  },
  "devDependencies": {
    "@types/body-parser": "^1.19.2",
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/node": "^20.4.2",
    "body-parser": "^1.20.2",
    "concurrently": "^8.2.0",
    "cors": "^2.8.5",
    "nodemon": "^3.0.1",
    "rimraf": "^5.0.1"
  }