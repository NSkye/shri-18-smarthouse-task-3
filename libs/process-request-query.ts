const allowedTypes: string[] = ['info', 'critical'];

module.exports = function processRequestQuery(
  query: string,
  wrappedEvents: SmartHouseEventsWrapped,
): SmartHouseEvent[] | null {
  const events: SmartHouseEvent[] = wrappedEvents.events;

  const types: string[] = query.split(':').filter(type => type !== '');
  for (const type of types) {
    if (!~allowedTypes.indexOf(type)) {
      return null;
    }
  }

  return events.filter(event => ~types.indexOf(event.type));
};
