const dateDiff = require('../libs/date-diff');

module.exports = (startTime: number) => {
  return (_: any, res: any): void => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(dateDiff(startTime));
  };
};
