Installation -

1. create mongoose db at cloud(mlab.com). create a project & cluster.
2. under the new project folder, initialize NPM.
3. npm init.
4. make sure that the entry point is server.js
5. install - npm i express mongoose passport passport-jwt jsonwebtoken body-parser bcryptjs validator
6. create a dev dependency for nodemon by - npm i -D nodemon

Start -

1. create server.js and setup the express, nodemon and response. The server should be up and running.
2. connect to DB. create a seperate folder config to store the DB cloud connection details. Under folder 'config', create a file keys.js and keep the db connection details copied from cloud.
3. setup express to split files for resources. There are three main resources for this project:

   1. user profile
   2. Our profile
   3. posts

4. create a new folder 'Routes'. Create another folder called 'API' to store backend APIs.
5. under API folder, create new files:
   1. users.js --> this will manage the login part of user
   2. profile.js --> this will manage the profile part of user like biodata, location, experiences, education.
   3. posts.js --> this will manage the posts part of user.
6. create Routes for each API's
7. do the router setup for each API. use Router class from express to create GET/POST routes for each API(users, posts, profile)
