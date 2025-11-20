# TLM CLI Progress FX

🎨 Stylized animated progress bars for Node.js CLI with multiple visual effects.

Bring your terminal UX to life with glitch, gradient, matrix, and retro 8-bit progress bars. Perfect for file downloads, build processes, data processing, and any long-running CLI operation.

## Features

✨ **4 Stunning Effects**
- **Glitch** - Corrupted characters with color shifts
- **Gradient** - Smooth 16-color gradients
- **Matrix** - Animated kanji characters (Matrix style)
- **Retro 8-bit** - Pixelated retro aesthetic

🎯 **7 Ready-to-Use Presets**
- `default` - Clean gradient with percentage
- `glitch` - Chaotic system style
- `matrix` - Green flowing characters
- `retro` - Colorful pixel art
- `neon` - Vibrant cyber colors
- `cyberpunk` - Intense glitch effect
- `minimal` - Lightweight gradient

🎛️ **Fully Customizable**
- Effect selection
- Width, colors, intensity
- Labels and percentage display
- Custom characters and animations

## Installation

### Via npm

```bash
npm install tlm-cli-progress-fx
```

### From Source

```bash
git clone <repository-url>
cd tlm-cli-progress-fx
npm install
npm run demo
```

## Quick Start

### Basic Usage

```javascript
const ProgressBar = require('tlm-cli-progress-fx');

const bar = new ProgressBar('gradient');
bar.start();

let current = 0;
const total = 100;

const interval = setInterval(() => {
  current += Math.random() * 10;
  
  if (current >= total) {
    current = total;
    clearInterval(interval);
    bar.update(current, total);
    bar.finish('Complete!');
  } else {
    bar.update(current, total);
  }
}, 200);
```

### Using Presets

```javascript
const { ProgressBar, presets } = require('tlm-cli-progress-fx');

// Use a preset by name
const matrix = new ProgressBar('matrix');
const glitch = new ProgressBar('glitch');
const retro = new ProgressBar('retro');
```

### Custom Configuration

```javascript
const bar = new ProgressBar({
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

bar.start();
bar.update(50, 100);
bar.finish('Done!');
```

## Presets

All presets are pre-configured with optimal settings for their effect:

### default
```
Progress ████████░░░░░░░░░░░░░░░░░░░░░░  30%
```
- Effect: gradient
- Width: 30
- Shows label and percentage

### glitch
```
SYSTEM ▓█░▒▓█░░░░░░░░░░░░░░░░░░░░░░░░░░░░  42%
```
- Effect: glitch
- Width: 40
- Chaotic colored corruption

### matrix
```
ｦｧｨｩｪｫｬｭｮｯ01█ｦｧｨｩｪｫｬｭｮｯ01█ｦｧｨｩｪｫ  78%
```
- Effect: matrix
- Width: 50
- Flowing kanji animation

### retro
```
8-BIT ▁▂▃▄▅▆▇███▌▌▌▌▌  65%
```
- Effect: retro8bit
- Width: 35
- Colorful pixel blocks

### neon
```
NEON ▓▓▓▓▓▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░  50%
```
- Effect: gradient (neon colors)
- Width: 40
- Vibrant cyan to magenta

### cyberpunk
```
■ CYBER ▓█░▒▓█░▓█░░░░░░░░░░░░░░░░░░░░░░░  55%
```
- Effect: glitch
- Width: 45
- Intense neon colors

### minimal
```
████████░░░░░░░░░░░░░░░░  80%
```
- Effect: gradient
- Width: 25
- No label, clean output

## API Reference

### `new ProgressBar(options)`

Creates a new progress bar instance.

**Parameters:**
- `options` (string | object) - Preset name or configuration object

**Options Object:**
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `effect` | string | `'gradient'` | Effect type: `glitch`, `gradient`, `matrix`, `retro8bit` |
| `width` | number | `30` | Bar width in characters |
| `label` | string | `''` | Optional label text |
| `showLabel` | boolean | `false` | Display the label |
| `showPercent` | boolean | `true` | Display percentage |
| `effectOptions` | object | `{}` | Effect-specific options |

**effectOptions by Effect:**

**glitch:**
- `intensity` (0-1) - Amount of corruption, default: `0.6`
- `colors` (array) - ANSI color codes, default: `['\x1b[36m', '\x1b[35m', '\x1b[33m']`

**gradient:**
- `startColor` - ANSI color, default: `'\x1b[38;5;21m'` (blue)
- `endColor` - ANSI color, default: `'\x1b[38;5;226m'` (yellow)
- `emptyColor` - ANSI color, default: `'\x1b[38;5;8m'` (gray)

**matrix:**
- `matrixChars` (array) - Characters to animate, default: katakana + numbers
- `flowSpeed` (0-1) - Animation speed, default: `0.015`

**retro8bit:**
- `pixelSize` (number) - Pixels per character, default: `2`
- `colors` (array) - ANSI colors for palette rotation

### Methods

#### `render(current, total)`

Returns the formatted progress bar string without updating output.

```javascript
const bar = new ProgressBar('gradient');
const output = bar.render(50, 100);
console.log(output);
```

#### `update(current, total)`

Updates the terminal with current progress.

```javascript
bar.update(50, 100);  // 50% progress
```

#### `start()`

Initializes the progress bar and starts timing.

```javascript
bar.start();
```

#### `finish(text)`

Completes the progress bar and prints a completion message.

```javascript
bar.finish('Operation complete!');
// Output: ✓ Operation complete! (4s)
```

## Examples

### File Download Simulation

```javascript
const { ProgressBar } = require('tlm-cli-progress-fx');

const bar = new ProgressBar({
  effect: 'gradient',
  width: 40,
  label: '📥 Downloading',
  showLabel: true,
  showPercent: true
});

bar.start();

let downloaded = 0;
const fileSize = 1000;

const timer = setInterval(() => {
  downloaded += Math.random() * 50;
  
  if (downloaded >= fileSize) {
    clearInterval(timer);
    bar.update(fileSize, fileSize);
    bar.finish('Download complete');
  } else {
    bar.update(downloaded, fileSize);
  }
}, 100);
```

### Multiple Bars

```javascript
const { ProgressBar } = require('tlm-cli-progress-fx');

async function processTasks() {
  const tasks = [
    { name: 'Task 1', preset: 'gradient' },
    { name: 'Task 2', preset: 'matrix' },
    { name: 'Task 3', preset: 'glitch' }
  ];
  
  for (const task of tasks) {
    const bar = new ProgressBar({
      effect: task.preset,
      label: task.name,
      showLabel: true
    });
    
    bar.start();
    
    for (let i = 0; i <= 100; i += 5) {
      bar.update(i, 100);
      await new Promise(r => setTimeout(r, 100));
    }
    
    bar.finish();
  }
}

processTasks();
```

## Building from Source

### Requirements
- Node.js >= 12.0.0
- npm

### Development

```bash
# Clone repository
git clone <repository-url>
cd tlm-cli-progress-fx

# Install dependencies
npm install

# Run all demos
npm run demo

# Run specific demo
npm run demo:basic
npm run demo:custom
npm run demo:realistic
```

### Project Structure

```
tlm-cli-progress-fx/
├── index.js                 # Main entry point
├── lib/
│   ├── index.js            # Core exports
│   ├── progressBar.js      # Main ProgressBar class
│   ├── presets.js          # Preset configurations
│   └── effects/
│       ├── glitch.js       # Glitch effect
│       ├── gradient.js     # Gradient effect
│       ├── matrix.js       # Matrix effect
│       └── retro8bit.js    # Retro 8-bit effect
├── examples/
│   ├── basic.js            # Basic usage
│   ├── all-effects.js      # All effects demo
│   ├── custom.js           # Custom configuration
│   └── realistic.js        # Realistic use cases
├── package.json
└── README.md
```

### Adding Custom Effects

1. Create a new effect file in `lib/effects/`:

```javascript
// lib/effects/custom.js
const custom = {
  name: 'custom',
  
  render: (percent, width, options = {}) => {
    const { colors = ['\x1b[36m'] } = options;
    const filled = Math.round((width * percent) / 100);
    const empty = width - filled;
    
    let bar = colors[0] + '█'.repeat(filled) + '\x1b[0m';
    bar += '\x1b[2m░'.repeat(empty) + '\x1b[0m';
    
    return bar;
  }
};

module.exports = custom;
```

2. Add to `lib/index.js`:

```javascript
const custom = require('./effects/custom');

module.exports = {
  ProgressBar,
  presets,
  effects: {
    glitch,
    gradient,
    matrix,
    retro8bit,
    custom  // Add here
  }
};
```

3. Use in your code:

```javascript
const bar = new ProgressBar({
  effect: 'custom',
  effectOptions: { colors: ['\x1b[91m'] }
});
```

## ANSI Color Reference

Common ANSI color codes for customization:

```javascript
const colors = {
  // Basic colors
  red: '\x1b[91m',
  green: '\x1b[92m',
  yellow: '\x1b[93m',
  blue: '\x1b[94m',
  magenta: '\x1b[95m',
  cyan: '\x1b[96m',
  
  // Extended 256-color palette
  darkBlue: '\x1b[38;5;21m',
  neon: '\x1b[38;5;51m',
  orange: '\x1b[38;5;208m',
  
  // Reset
  reset: '\x1b[0m'
};
```

## Browser Compatibility

This module is designed for **Node.js CLI environments only**. It will not work in browser environments.

## Performance

- Minimal dependencies (zero external dependencies)
- Optimized rendering for smooth 60 FPS animation
- Memory efficient for long-running processes

## License

MIT

## Contributing

Contributions welcome! Feel free to submit issues and pull requests.

## Changelog

### v1.0.0
- Initial release with 4 core effects
- 7 preset configurations
- Full customization support
- Complete documentation
