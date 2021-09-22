const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const port = 3000;
// const bodyParser = require('body-parser');
const chalk = require('chalk');

app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.urlencoded({ extended: true }));

// Routes (GET, POST, DELETE)
app.post('/images', (req, res) => {
    //Axios.post to the API - use temp literals to interpolate the API key from the .env file into the search query
    res.send();
});

app.listen(port, () => {
    console.log(chalk.magenta(`App listening on http://localhost:${port}`));
});

// NOTE: HTTP requests from the client side, e.g. the search bar, will be made using axios and then arrive here. Then we will invoke the db controllers defined in that file/folder