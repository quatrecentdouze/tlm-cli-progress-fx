const glitch = require('./effects/glitch');
const gradient = require('./effects/gradient');
const matrix = require('./effects/matrix');
const retro8bit = require('./effects/retro8bit');
const presets = require('./presets');

class ProgressBar {
  constructor(options = {}) {
    const preset = typeof options === 'string' ? presets[options] : presets.default;
    
    this.config = {
      effect: 'gradient',
      width: 30,
      showPercent: true,
      showLabel: false,
      label: '',
      effectOptions: {},
      ...preset,
      ...options
    };

    this.effects = {
      glitch: glitch.render,
      gradient: gradient.render,
      matrix: matrix.render,
      retro8bit: retro8bit.render
    };

    this.current = 0;
    this.total = 100;
    this.startTime = Date.now();
  }

  render(current = this.current, total = this.total) {
    this.current = current;
    this.total = total;

    const percent = Math.min(100, Math.round((current / total) * 100));
    const effect = this.effects[this.config.effect];

    if (!effect) {
      throw new Error(`Unknown effect: ${this.config.effect}`);
    }

    const bar = effect(percent, this.config.width, this.config.effectOptions);
    
    let output = '';

    if (this.config.showLabel && this.config.label) {
      output += `\x1b[1m${this.config.label}\x1b[0m `;
    }

    output += bar;

    if (this.config.showPercent) {
      const percentStr = `${percent.toString().padStart(3)}%`;
      output += ` \x1b[1m${percentStr}\x1b[0m`;
    }

    return output;
  }

  update(current, total) {
    process.stdout.write('\r' + this.render(current, total));
  }

  start() {
    this.startTime = Date.now();
    this.current = 0;
  }

  finish(text = 'Complete!') {
    const elapsed = Math.round((Date.now() - this.startTime) / 1000);
    process.stdout.write('\n');
    console.log(`✓ ${text} (${elapsed}s)`);
  }

  static create(options) {
    return new ProgressBar(options);
  }
}

module.exports = ProgressBar;
