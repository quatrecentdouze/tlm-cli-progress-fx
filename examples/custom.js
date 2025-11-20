const { ProgressBar } = require('../lib');

const customBar = new ProgressBar({
  effect: 'glitch',
  width: 50,
  label: '◆ CUSTOM ◆',
  showLabel: true,
  showPercent: true,
  effectOptions: {
    intensity: 0.5,
    colors: [
      '\x1b[38;5;201m',
      '\x1b[38;5;165m',
      '\x1b[38;5;129m',
      '\x1b[38;5;135m'
    ]
  }
});

customBar.start();

let current = 0;
const total = 100;
const interval = setInterval(() => {
  current += Math.random() * 10;
  if (current >= total) {
    current = total;
    clearInterval(interval);
    customBar.update(current, total);
    customBar.finish('Custom preset loaded!');
  } else {
    customBar.update(current, total);
  }
}, 250);
