const allowedTypes = ['info', 'critical']

module.exports = function processRequestQuery (query, events) {
  events = events.events

  const types = query.split(':').filter(type => type !== '')
  for (let i = 0; i < types.length; i++) {
    const type = types[i]
    if (!~allowedTypes.indexOf(type)) {
      return null
    }
  }

  return events.filter(event => ~types.indexOf(event.type))
}
