const ProgressBar = require('./progressBar');
const presets = require('./presets');
const glitch = require('./effects/glitch');
const gradient = require('./effects/gradient');
const matrix = require('./effects/matrix');
const retro8bit = require('./effects/retro8bit');

module.exports = {
  ProgressBar,
  presets,
  effects: {
    glitch,
    gradient,
    matrix,
    retro8bit
  }
};
