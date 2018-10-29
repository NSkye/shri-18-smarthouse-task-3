module.exports = function dateDiff(startDate: number): string {
  let diff: number = (Date.now() - startDate);

  return [ 3600000, 60000, 1000 ].reduce((ac: string, cv: number, ci: number): string => {
    let delta: number | string = Math.floor(diff / cv);
    diff = diff - delta * cv;
    delta = String(delta);
    ac += (delta.length >= 2 ? delta : '0' + delta) + (ci === 2 ? '' : ':');
    return ac;
  }, '');
};
