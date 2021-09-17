### the-search-app

# This is a MERN stack search application using Bootstrap React UI framework on the front-end.

# I have broken down each portion of the application so that it will make it easier to build a piece at a time:

** The client folder will contain a dist folder for our html file, css, and eventually our bundle when we compile our application using babel & webpack

** Inside of the client folder there is also a src folder which will contain all of our react files (notice the .jsx file extension(s)). This is where we define our app's components

** The server folder is where our server file (configuration) will be. Also, for the sake of ease, we'll also define our routes here. As you can see, we have a "get" route in there already that you added when setting up the Express server

** The db folder is where we the file for our db config, models, and controllers will be defined

## Make sure to run npm install after pulling from master. That way you'll first get all the updated changes AND install any new dependencies needed to run our application

# Here are some helpful links:

MongoDB - https://github.com/mongodb/homebrew-brew
Mongoose - https://mongoosejs.com/docs/index.html
Homebrew - https://brew.sh/
React - https://reactjs.org/docs/introducing-jsx.html
Express - http://expressjs.com/en/guide/routing.html
Axios - https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
Chalk - https://www.npmjs.com/package/chalk

# Helpful tips

1.) Use chalk for your server and db console logs, using different colors to differentiate where the error is coming from

2.) Use the Axios cheat sheet for reference when defining HTTP requests from client to server

3.) Use the mongoose cheat sheet to assist in defining your db controllers

3.) I add some scripts in package.json. DO NOT run the "build" script yet. Only use "start" for now :)

