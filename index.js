'use strict'

const express = require('express')
const dateDiff = require('./libs/date-diff')
const events = require('./data/events.json')

const app = express()
const port = 8000

const startTime = Date.now()

app.get('/status', (_, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.send(dateDiff(startTime))
})
app.get('/api/events', (_, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(events))
})

app.listen(port, () => console.log('Listening ...'))
