module.exports = (startDate, diff = (Date.now() - startDate)) => [ 3600000, 60000, 1000 ].reduce((ac, cv, ci) => {
    let delta = Math.floor(diff / cv)
    diff = diff - delta
    delta = String(delta)
    delta = delta.length >= 2 ? delta : '0' + delta
    ac += String(delta) + (ci === 2 ? '' : ':')
    return ac
  }, '')