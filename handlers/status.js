const dateDiff = require('../libs/date-diff')

module.exports = function createStatusHandler (startTime) {
  return function (_, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(dateDiff(startTime))
  }
}
