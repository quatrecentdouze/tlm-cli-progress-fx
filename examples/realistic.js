const { ProgressBar } = require('../lib');

async function simulateFileDownload(fileName, fileSize = 100) {
  const progressBar = new ProgressBar({
    effect: 'gradient',
    width: 40,
    label: `📥 ${fileName}`,
    showLabel: true,
    showPercent: true
  });

  progressBar.start();

  let downloaded = 0;
  const chunkSize = 5;
  
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      downloaded += Math.random() * chunkSize;
      
      if (downloaded >= fileSize) {
        downloaded = fileSize;
        clearInterval(interval);
        progressBar.update(downloaded, fileSize);
        progressBar.finish(`${fileName} downloaded successfully`);
        resolve();
      } else {
        progressBar.update(downloaded, fileSize);
      }
    }, 100);
  });
}

async function simulateBuild() {
  const progressBar = new ProgressBar({
    effect: 'matrix',
    width: 45,
    label: '⚙ BUILD',
    showLabel: true,
    showPercent: true,
    effectOptions: {
      flowSpeed: 0.3
    }
  });

  progressBar.start();

  let progress = 0;
  const total = 100;
  
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      progress += Math.random() * 12;
      
      if (progress >= total) {
        progress = total;
        clearInterval(interval);
        progressBar.update(progress, total);
        progressBar.finish('Build completed');
        resolve();
      } else {
        progressBar.update(progress, total);
      }
    }, 150);
  });
}

async function main() {
  console.log('\n=== REALISTIC USAGE EXAMPLES ===\n');
  
  console.log('Downloading files:\n');
  await simulateFileDownload('package.tar.gz', 100);
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\nBuilding project:\n');
  await simulateBuild();
  
  console.log('\n✅ All tasks completed!\n');
}

main();
