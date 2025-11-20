const { Spinner } = require('../lib');

async function demo() {
  const spinner = new Spinner({
    text: 'Processing files...',
    color: '\x1b[36m'
  });

  spinner.start();

  await new Promise(resolve => setTimeout(resolve, 2000));

  spinner.succeed('Files processed successfully!');
}

demo();
