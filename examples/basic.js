const { ProgressBar } = require('../lib');

const progressBar = new ProgressBar('retro');

progressBar.start();

let current = 0;
const total = 100;
const interval = setInterval(() => {
  current += Math.random() * 15;
  if (current >= total) {
    current = total;
    clearInterval(interval);
    progressBar.update(current, total);
    progressBar.finish('Download complete!');
  } else {
    progressBar.update(current, total);
  }
}, 300);
