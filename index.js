'use strict'

const express = require('express')
const dateDiff = require('./libs/date-diff')

const app = express()
const port = 8000

const startTime = Date.now()

app.get('/status', (_, res) => res.send(dateDiff(startTime)))
app.get('/api/events', (_, res) => res.send('there will be events.json'))

app.listen(port, () => console.log('Listening ...'))
