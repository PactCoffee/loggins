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
  sketchMSLayerGroup: / +sketch:type=\"MSLayerGroup\"/gi
};

function cleanupSvg(svg) {
  return Object.keys(cleanups)
    .reduce((acc, key) => {
      return acc.replace(cleanups[key], '');
    }, svg)
    .trim();
}

export default {
  cog: cleanupSvg(require('./icons/cog.svg')),
  pin: cleanupSvg(require('./icons/pin.svg')),
  tick: cleanupSvg(require('./icons/tick.svg')),
  more: cleanupSvg(require('./icons/more.svg')),
  clock: cleanupSvg(require('./icons/clock.svg')),
  heart: cleanupSvg(require('./icons/heart.svg')),
  thumb: cleanupSvg(require('./icons/thumb.svg')),
  pactV: cleanupSvg(require('./icons/pactV.svg')),
  pactH: cleanupSvg(require('./icons/pactH.svg')),
  stamp: cleanupSvg(require('./icons/stamp.svg')),
  coffee: cleanupSvg(require('./icons/coffee.svg')),
  chevron: cleanupSvg(require('./icons/chevron.svg')),
  twitter: cleanupSvg(require('./icons/twitter.svg')),
  facebook: cleanupSvg(require('./icons/facebook.svg')),
  triangle: cleanupSvg(require('./icons/triangle.svg'))
};
