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
  clock: cleanupSvg(require('./svg/clock.svg')),
  coffee: cleanupSvg(require('./svg/coffee.svg')),
  heart: cleanupSvg(require('./svg/heart.svg')),
  thumb: cleanupSvg(require('./svg/thumb.svg')),
  twitter: cleanupSvg(require('./svg/twitter.svg')),
  facebook: cleanupSvg(require('./svg/facebook.svg')),
  cog: cleanupSvg(require('./svg/cog.svg'))
};
