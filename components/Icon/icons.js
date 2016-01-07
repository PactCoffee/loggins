// https://gist.github.com/MoOx/1eb30eac43b2114de73a
const cleanups = {
  title: /<title>.*<\/title>/gi,
  desc: /<desc>.*<\/desc>/gi,
  comment: /<!--.*-->/gi,
  defs: /<defs>.*<\/defs>/gi,
  width: / +width="\d+(\.\d+)?(px)?"/gi,
  height: / +height="\d+(\.\d+)?(px)?"/gi,
  fill: / +fill=\"(none|#[0-9a-f]+)\"/gi,
  stroke: / +stroke=\"(none|#[0-9a-f]+)\"/gi,
  sketchMSShapeGroup: / +sketch:type=\"MSShapeGroup\"/gi,
  sketchMSPage: / +sketch:type=\"MSPage\"/gi,
  sketchMSLayerGroup: / +sketch:type=\"MSLayerGroup\"/gi,
};

function cleanupSvg(svg) {
  return Object.keys(cleanups)
    .reduce((acc, key) => {
      return acc.replace(cleanups[key], '');
    }, svg)
    .trim();
}

export default {
  pactV: cleanupSvg(require('./icons/pactV.svg')),
  pactH: cleanupSvg(require('./icons/pactH.svg')),
  stamp: cleanupSvg(require('./icons/stamp.svg')),

  cog: cleanupSvg(require('./icons/cog.svg')),
  pin: cleanupSvg(require('./icons/pin.svg')),
  card: cleanupSvg(require('./icons/card.svg')),
  play: cleanupSvg(require('./icons/play.svg')),
  bean: cleanupSvg(require('./icons/bean.svg')),
  tick: cleanupSvg(require('./icons/tick.svg')),
  more: cleanupSvg(require('./icons/more.svg')),
  pause: cleanupSvg(require('./icons/pause.svg')),
  clock: cleanupSvg(require('./icons/clock.svg')),
  heart: cleanupSvg(require('./icons/heart.svg')),
  arrow: cleanupSvg(require('./icons/arrow.svg')),
  thumb: cleanupSvg(require('./icons/thumb.svg')),
  cross: cleanupSvg(require('./icons/cross.svg')),
  plus: cleanupSvg(require('./icons/plus.svg')),
  coffee: cleanupSvg(require('./icons/coffee.svg')),
  chevron: cleanupSvg(require('./icons/chevron.svg')),
  voucher: cleanupSvg(require('./icons/voucher.svg')),
  triangle: cleanupSvg(require('./icons/triangle.svg')),
  recurring: cleanupSvg(require('./icons/recurring.svg')),
  asap: cleanupSvg(require('./icons/asap.svg')),
  decaf: cleanupSvg(require('./icons/decaf.svg')),
  calendar: cleanupSvg(require('./icons/calendar.svg')),

  twitter: cleanupSvg(require('./icons/twitter.svg')),
  facebook: cleanupSvg(require('./icons/facebook.svg')),
  instagram: cleanupSvg(require('./icons/instagram.svg')),

  anDrip: cleanupSvg(require('./icons/drip.svg')),
  aeropressFilter: cleanupSvg(require('./icons/aeropressFilter.svg')),

  pod: cleanupSvg(require('./icons/pod.svg')),
  pod_long: cleanupSvg(require('./icons/pod.svg')),
  pod_short: cleanupSvg(require('./icons/pod.svg')),
  drip: cleanupSvg(require('./icons/dripper.svg')),
  espresso: cleanupSvg(require('./icons/espresso.svg')),
  stovetop: cleanupSvg(require('./icons/stovetop.svg')),
  aeropress: cleanupSvg(require('./icons/aeropress.svg')),
  cafetiere: cleanupSvg(require('./icons/cafetiere.svg')),
  wholebean: cleanupSvg(require('./icons/wholebean.svg')),
};
