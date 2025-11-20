const styles = require('./styles');

class Spinner {
  constructor(options = {}) {
    let style;

    if (typeof options === 'string') {
      style = styles[options];
    } else if (options.frames && options.interval) {
      style = options;
    } else if (options.style) {
      style = styles[options.style];
    } else {
      style = styles.dots;
    }

    if (!style || !style.frames || !style.interval) {
      throw new Error(`Unknown spinner style or invalid style object`);
    }

    this.config = {
      text: 'Loading',
      prefixText: '',
      suffixText: '',
      color: '\x1b[36m',
      disableSpinner: false,
      ...options
    };

    this.style = style;
    this.frameIndex = 0;
    this.intervalId = null;
    this.isRunning = false;
  }

  render() {
    const frame = this.style.frames[this.frameIndex % this.style.frames.length];
    const prefix = this.config.prefixText ? `${this.config.prefixText} ` : '';
    const text = this.config.text || '';
    const suffix = this.config.suffixText ? ` ${this.config.suffixText}` : '';

    if (this.config.disableSpinner) {
      return `${prefix}${text}${suffix}`;
    }

    return `${this.config.color}${frame}\x1b[0m ${prefix}${text}${suffix}`;
  }

  start(text = null) {
    if (this.isRunning) {
      return this;
    }

    if (text) {
      this.config.text = text;
    }

    this.isRunning = true;
    this.frameIndex = 0;

    this.intervalId = setInterval(() => {
      process.stdout.write(`\r${this.render()}`);
      this.frameIndex++;
    }, this.style.interval);

    return this;
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
    process.stdout.write('\n');
    return this;
  }

  setText(text) {
    this.config.text = text;
    return this;
  }

  setColor(color) {
    this.config.color = color;
    return this;
  }

  succeed(text = null) {
    if (text) {
      this.config.text = text;
    }
    this.stop();
    const output = `✓ ${this.config.text}`;
    console.log(`\x1b[32m${output}\x1b[0m`);
    return this;
  }

  fail(text = null) {
    if (text) {
      this.config.text = text;
    }
    this.stop();
    const output = `✗ ${this.config.text}`;
    console.log(`\x1b[31m${output}\x1b[0m`);
    return this;
  }

  warn(text = null) {
    if (text) {
      this.config.text = text;
    }
    this.stop();
    const output = `⚠ ${this.config.text}`;
    console.log(`\x1b[33m${output}\x1b[0m`);
    return this;
  }

  info(text = null) {
    if (text) {
      this.config.text = text;
    }
    this.stop();
    const output = `ℹ ${this.config.text}`;
    console.log(`\x1b[36m${output}\x1b[0m`);
    return this;
  }

  static create(options) {
    return new Spinner(options);
  }
}

module.exports = Spinner;
