const processRequestQuery:
  (query: string, wrappedEvents: SmartHouseEventsWrapped) =>
    SmartHouseEvent[] = require('../libs/process-request-query');
const events: SmartHouseEventsWrapped = require('../data/events.json');

module.exports = function eventsHandler(req: any, res: any): void {
  let responseObject: SmartHouseEventsWrapped | SmartHouseEvent[] = events;
  if (req.query.type) {
    responseObject = processRequestQuery(req.query.type, events);
  }

  const contentType: string = responseObject ? 'application/json' : 'text/plain';
  const status: number = responseObject ? 200 : 400;
  const msg: string = responseObject ? JSON.stringify(responseObject) : 'incorrect type';

  res.setHeader('Content-Type', contentType);
  res.status(status).send(msg);
};
