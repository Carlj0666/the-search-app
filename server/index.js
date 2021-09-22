const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const chalk = require('chalk');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes (GET, POST, DELETE)
app.get('/images', (req, res) => {
    //Axios.get to the API - use temp literals to interpolate the API key from the .env file into the search query
    //https://api.unsplash.com/photos/?client_id=aOHzFzHYRN3RBBRF9JV8FWUn62n3_meOalbZDnLfi_4&query=
    console.log("Request resp: " + req)
//     axios.get(`https://api.unsplash.com/photos/?client_id=aOHzFzHYRN3RBBRF9JV8FWUn62n3_meOalbZDnLfi_4&query=${}`)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

    res.send();
});

app.listen(port, () => {
    console.log(chalk.magenta(`App listening on http://localhost:${port}`));
});

// NOTE: HTTP requests from the client side, e.g. the search bar, will be made using axios and then arrive here. Then we will invoke the db controllers defined in that file/folder

// Look for disconect between client and server
// why deprecated bodyParser?