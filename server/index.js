const express = require('express')
const app = express()
const port = 3000
const chalk = require('chalk');

// Routes (GET, POST, DELETE)
app.get('/', (req, res) => {
    res.send('Wait up guys, I fell on my keys!')
})

app.listen(port, () => {
    console.log(chalk.magenta(`App listeing on http://localhost:${port}`));
})

// NOTE: HTTP requests from the client side, e.g. the search bar, will be made using axios and then arrive here. Then we will invoke the db controllers defined in that file/folder
