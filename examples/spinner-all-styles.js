const { Spinner, spinnerStyles } = require('../lib');

async function demoStyle(styleName) {
  return new Promise((resolve) => {
    const spinner = new Spinner({
      ...spinnerStyles[styleName],
      text: styleName,
      color: '\x1b[36m'
    });

    spinner.start();

    setTimeout(() => {
      spinner.succeed(`${styleName} completed`);
      resolve();
    }, 1500);
  });
}

async function runAllStyles() {
  console.log('\n=== SPINNER STYLES DEMO ===\n');

  const styleNames = Object.keys(spinnerStyles);

  for (const styleName of styleNames) {
    await demoStyle(styleName);
  }

  console.log('\n✨ All spinner styles demonstrated!\n');
}

runAllStyles();
