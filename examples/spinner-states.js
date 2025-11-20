const { Spinner } = require('../lib');

async function demo() {
  console.log('\n=== SPINNER STATES DEMO ===\n');

  let spinner = new Spinner({
    text: 'Downloading files',
    color: '\x1b[36m'
  });

  spinner.start();
  await new Promise(resolve => setTimeout(resolve, 1500));
  spinner.succeed('Download completed');

  console.log('');

  spinner = new Spinner({
    text: 'Processing data',
    color: '\x1b[33m'
  });

  spinner.start();
  await new Promise(resolve => setTimeout(resolve, 1500));
  spinner.warn('Processing skipped with warnings');

  console.log('');

  spinner = new Spinner({
    text: 'Building project',
    color: '\x1b[36m'
  });

  spinner.start();
  await new Promise(resolve => setTimeout(resolve, 1500));
  spinner.fail('Build failed');

  console.log('');

  spinner = new Spinner({
    text: 'Analyzing code',
    color: '\x1b[36m'
  });

  spinner.start();
  await new Promise(resolve => setTimeout(resolve, 1500));
  spinner.info('Analysis complete');

  console.log('');
}

demo();
