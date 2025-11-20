const ProgressBar = require('./progressBar');
const Spinner = require('./spinner/spinner');
const presets = require('./presets');
const glitch = require('./effects/glitch');
const gradient = require('./effects/gradient');
const matrix = require('./effects/matrix');
const retro8bit = require('./effects/retro8bit');
const spinnerStyles = require('./spinner/styles');

module.exports = {
  ProgressBar,
  Spinner,
  presets,
  spinnerStyles,
  effects: {
    glitch,
    gradient,
    matrix,
    retro8bit
  }
};
