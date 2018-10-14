module.exports = function dateDiff (startDate) {
  let diff = (Date.now() - startDate)

  return [ 3600000, 60000, 1000 ].reduce((ac, cv, ci) => {
    let delta = Math.floor(diff / cv)
    diff = diff - delta * cv
    delta = String(delta)
    return ac += (delta.length >= 2 ? delta : '0' + delta) + (ci === 2 ? '' : ':')
  }, '')
}
