// https://gist.github.com/MoOx/1eb30eac43b2114de73a
const cleanups = {
  title: /<title>.*<\/title>/gi,
  desc: /<desc>.*<\/desc>/gi,
  comment: /<!--.*-->/gi,
  defs: /<defs>.*<\/defs>/gi,
  width: / +width="\d+(\.\d+)?(px)?"/gi,
  height: / +height="\d+(\.\d+)?(px)?"/gi,
  fill: / +fill="(none|#[0-9a-f]+)"/gi,
  stroke: / +stroke="(none|#[0-9a-f]+)"/gi,
  sketchMSShapeGroup: / +sketch:type="MSShapeGroup"/gi,
  sketchMSPage: / +sketch:type="MSPage"/gi,
  sketchMSLayerGroup: / +sketch:type="MSLayerGroup"/gi,
};

function cleanupSvg(svg) {
  return Object.keys(cleanups)
               .reduce((acc, key) => {
                 return acc.replace(cleanups[key], '');
               }, svg)
               .trim();
}

export default {
  arrow: cleanupSvg(require('./icons/arrow.svg')),
  asap: cleanupSvg(require('./icons/asap.svg')),
  bean: cleanupSvg(require('./icons/bean.svg')),
  caffiene: cleanupSvg(require('./icons/caffiene.svg')),
  calendar: cleanupSvg(require('./icons/calendar.svg')),
  card: cleanupSvg(require('./icons/card.svg')),
  chevron: cleanupSvg(require('./icons/chevron.svg')),
  clock: cleanupSvg(require('./icons/clock.svg')),
  coffee: cleanupSvg(require('./icons/coffee.svg')),
  cog: cleanupsvg(require('./icons/cog.svg')),
  cross: cleanupsvg(require('./icons/cross.svg')),
  cup: cleanupsvg(require('./icons/cup.svg')),
  decaf: cleanupsvg(require('./icons/decaf.svg')),
  document: cleanupsvg(require('./icons/document.svg')),
  envelope: cleanupsvg(require('./icons/envelope.svg')),
  globe: cleanupsvg(require('./icons/globe.svg')),
  heart: cleanupsvg(require('./icons/heart.svg')),
  minus: cleanupSvg(require('./icons/minus.svg')),
  more: cleanupSvg(require('./icons/more.svg')),
  pause: cleanupSvg(require('./icons/pause.svg')),
  pin: cleanupSvg(require('./icons/pin.svg')),
  play: cleanupSvg(require('./icons/play.svg')),
  plus: cleanupSvg(require('./icons/plus.svg')),
  randomise: cleanupSvg(require('./icons/randomise.svg')),
  recurring: cleanupSvg(require('./icons/recurring.svg')),
  recurringSmall: cleanupSvg(require('./icons/recurringSmall.svg')),
  star: cleanupSvg(require('./icons/star.svg')),
  thumb: cleanupSvg(require('./icons/thumb.svg')),
  tick: cleanupSvg(require('./icons/tick.svg')),
  tools: cleanupSvg(require('./icons/tools.svg')),
  triangle: cleanupSvg(require('./icons/triangle.svg')),
  voucher: cleanupSvg(require('./icons/voucher.svg')),

  // Logos
  pactH: cleanupSvg(require('./icons/pactH.svg')),
  pactV: cleanupSvg(require('./icons/pactV.svg')),
  pactWork: cleanupSvg(require('./icons/pactWork.svg')),
  stamp: cleanupSvg(require('./icons/stamp.svg')),

  // Social
  facebook: cleanupSvg(require('./icons/facebook.svg')),
  instagram: cleanupSvg(require('./icons/instagram.svg')),
  twitter: cleanupSvg(require('./icons/twitter.svg')),

  // Filters
  aeropressFilter: cleanupSvg(require('./icons/aeropressFilter.svg')),
  anDrip: cleanupSvg(require('./icons/drip.svg')),

  // Preparations
  aeropress: cleanupSvg(require('./icons/aeropress.svg')),
  bag: cleanupSvg(require('./icons/bag.svg')),
  batch_brew: cleanupSvg(require('./icons/batchbrew.svg')),
  cafetiere: cleanupSvg(require('./icons/cafetiere.svg')),
  drip: cleanupSvg(require('./icons/dripper.svg')),
  espresso: cleanupSvg(require('./icons/espresso.svg')),
  pod_long: cleanupSvg(require('./icons/pod_long.svg')),
  pod_mixed: cleanupSvg(require('./icons/pod_mixed.svg')),
  pod_short: cleanupSvg(require('./icons/pod_short.svg')),
  pod: cleanupSvg(require('./icons/pod.svg')),
  stovetop: cleanupSvg(require('./icons/stovetop.svg')),
  wholebean: cleanupSvg(require('./icons/wholebean.svg')),
  roaster: cleanupSvg(require('./icons/roaster.svg')),
};
