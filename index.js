'use strict'

const express = require('express')

const app = express()
const port = 8000

app.get('/', (_, res) => res.send('there will be server start time'))
app.get('/api/events', (_, res) => res.send('there will be events.json'))

app.listen(port, () => console.log('Listening ...'))
