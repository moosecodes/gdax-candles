module.exports.timeframeToSec = (timeframe) => {
  let units = {
    s: 1,
    m: 60,
    h: 3600
  }
  let time = '';
  let unit;
  const tfsplit = timeframe.split('');
  for (var i in tfsplit) {
    if (!isNaN(tfsplit[i])) {
      time += tfsplit[i];
    } else {
      unit = tfsplit[i];
      break;
    }
  }
  return unit && units[unit] && time.length > 0 ? Number(time) * units[unit] : units.s;
}

module.exports.timeLeft = (epoch, interval) => {
  return interval - (Math.floor(Number(epoch)/1000) % interval);
}

module.exports.nextTime = (epoch, interval) => {
  return (Math.floor(epoch/1000) + this.timeLeft(epoch, interval)) * 1000;
}
