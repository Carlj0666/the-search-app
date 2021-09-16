const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Wait up guys, I fell on my keys!')
})

app.listen(port, () => {
    console.log(`App listeing on http://localhost:${port}`)
})