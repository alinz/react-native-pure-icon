export const glypyMapMaker = (glypy) => Object.keys(glypy).map((key) => {
  return {
    key,
    value: String.fromCharCode(parseInt(glypy[key], 16))
  };
}).reduce((map, glypy) => {
  map[glypy.key] = glypy.value
  return map;
}, {});
