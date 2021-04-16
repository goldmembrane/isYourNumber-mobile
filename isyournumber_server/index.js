const express = require('express')
const path = require('path')
const app = express()
const port = 7500

app.use('/', express.static(__dirname + 'public'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(
    console.log(`listening app at http://localhost:${port}`)
)