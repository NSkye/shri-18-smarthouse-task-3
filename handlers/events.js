const processRequestQuery = require('../libs/process-request-query')
const events = require('../data/events.json')

module.exports = function eventsHandler (req, res) {
  let responseObject = events
  if (req.query.type) {
    responseObject = processRequestQuery(req.query.type, events)
  }

  const contentType = responseObject ? 'application/json' : 'text/plain'
  const status = responseObject ? 200 : 400
  const msg = responseObject ? JSON.stringify(responseObject) : 'incorrect type'

  res.setHeader('Content-Type', contentType)
  res.status(status).send(msg)
}
