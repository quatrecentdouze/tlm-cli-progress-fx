import ProgressBar, { ProgressBarOptions, presets, effects, PresetName } from '../index';

const barWithPreset: ProgressBar = new ProgressBar('default');
barWithPreset.start();
barWithPreset.update(50, 100);
barWithPreset.finish('Preset complete');

const barWithOptions: ProgressBar = new ProgressBar({
  effect: 'glitch',
  width: 50,
  label: '⚡ Processing',
  showLabel: true,
  showPercent: true,
  effectOptions: {
    intensity: 0.7,
    colors: ['\x1b[36m', '\x1b[35m', '\x1b[33m']
  }
});

barWithOptions.start();
barWithOptions.update(75, 100);
barWithOptions.finish('Custom complete');

const output: string = barWithPreset.render(50, 100);
console.log(output);

const customBar = ProgressBar.create({
  effect: 'matrix',
  width: 40,
  label: 'MATRIX',
  showLabel: true
});

customBar.start();
customBar.update(100, 100);
customBar.finish('Done');
