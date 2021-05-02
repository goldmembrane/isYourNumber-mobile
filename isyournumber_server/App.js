const express = require('express')
const app = express()
const port = 7500
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const RankRouter = require('./routers/rank')

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(
    cors({
        origin: ['*'],
        methods: ['POST', 'GET'],
        credentials: true,
    })
)

app.get('/', (req, res) => {
    res.status(200).send('Success')
})

app.use('/rank', RankRouter)

app.set('port', port)

app.listen(app.get('port'), () => {
    console.log(`app is listening in PORT ${app.get('port')}`)
})

module.exports = app