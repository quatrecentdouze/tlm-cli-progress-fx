const { ProgressBar } = require('../lib');

async function demoEffect(preset) {
  return new Promise((resolve) => {
    const progressBar = new ProgressBar(preset);
    progressBar.start();

    let current = 0;
    const total = 100;
    const interval = setInterval(() => {
      current += Math.random() * 20;
      if (current >= total) {
        current = total;
        clearInterval(interval);
        progressBar.update(current, total);
        process.stdout.write('\n');
        resolve();
      } else {
        progressBar.update(current, total);
      }
    }, 200);
  });
}

async function runAllEffects() {
  console.log('\n=== PROGRESS BAR EFFECTS DEMO ===\n');
  
  console.log('Gradient:');
  await demoEffect('default');
  
  console.log('\nGlitch:');
  await demoEffect('glitch');
  
  console.log('\nMatrix:');
  await demoEffect('matrix');
  
  console.log('\nRetro 8-bit:');
  await demoEffect('retro');
  
  console.log('\nNeon:');
  await demoEffect('neon');
  
  console.log('\nCyberpunk:');
  await demoEffect('cyberpunk');
  
  console.log('\nMinimal:');
  await demoEffect('minimal');
  
  console.log('\n✨ All effects completed!\n');
}

runAllEffects();
