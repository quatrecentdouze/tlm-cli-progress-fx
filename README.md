<div align="center">

# 🎨 TLM CLI Progress FX

**Stylized animated progress bars for Node.js CLI**

Bring your terminal UX to life with glitch, gradient, matrix, and retro 8-bit progress bars.

Perfect for file downloads, build processes, data processing, and any long-running CLI operation.

[Installation](#installation) • [Quick Start](#quick-start) • [API Reference](#api-reference) • [Examples](#examples)

</div>

---

## ✨ Features

### 4 Stunning Effects

- **Glitch** - Corrupted characters with color shifts
- **Gradient** - Smooth 16-color gradients
- **Matrix** - Animated kanji characters (Matrix style)
- **Retro 8-bit** - Pixelated retro aesthetic

### 7 Ready-to-Use Presets

| Preset | Effect | Style |
|--------|--------|-------|
| `default` | gradient | Clean with percentage |
| `glitch` | glitch | Chaotic system style |
| `matrix` | matrix | Green flowing characters |
| `retro` | retro8bit | Colorful pixel art |
| `neon` | gradient | Vibrant cyber colors |
| `cyberpunk` | glitch | Intense neon glitch |
| `minimal` | gradient | Lightweight & clean |

### 🎛️ Fully Customizable

- Effect selection
- Width, colors, intensity  
- Labels and percentage display
- Custom characters and animations

### 🔄 20+ Spinner Styles

Beautiful loading spinners for async operations with multiple visual styles and states (success, error, warning, info).

---

## 📦 Installation

### Via npm

```bash
npm install tlm-cli-progress-fx
```

### From Source

```bash
git clone https://github.com/quatrecentdouze/tlm-cli-progress-fx.git
cd tlm-cli-progress-fx
npm install
npm run demo
```

---

## 🚀 Quick Start

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
const neon = new ProgressBar('neon');
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

### Spinner Usage

```javascript
const { Spinner } = require('tlm-cli-progress-fx');

const spinner = new Spinner({
  text: 'Processing files...',
  color: '\x1b[36m'
});

spinner.start();

setTimeout(() => {
  spinner.succeed('Files processed!');
}, 2000);
```

**Spinner Methods:**

```javascript
spinner.start();           // Start spinning
spinner.stop();            // Stop and clear
spinner.setText('new');    // Update text
spinner.setColor('\x1b[32m');  // Change color

spinner.succeed('Done!');  // ✓ Success state
spinner.fail('Error!');    // ✗ Failed state
spinner.warn('Warning!');  // ⚠ Warning state
spinner.info('Info!');     // ℹ Info state
```

**Spinner Styles:**

```javascript
const { spinnerStyles } = require('tlm-cli-progress-fx');

new Spinner('dots');
new Spinner('line');
new Spinner('star');
new Spinner('growVertical');
```

20+ styles available: `dots`, `dots2`, `dots3`, `line`, `line2`, `pipe`, `simpleDots`, `star`, `flip`, `hamburger`, `growVertical`, `growHorizontal`, `balloon`, `noise`, `bounce`, `arc`, `circle`, and more!

---

## 📋 Presets Reference

All presets are pre-configured with optimal settings for their effect:

### default
```
Progress ████████░░░░░░░░░░░░░░░░░░░░░░  30%
```
- **Effect:** gradient
- **Width:** 30
- **Features:** Label + Percentage

### glitch
```
SYSTEM ▓█░▒▓█░░░░░░░░░░░░░░░░░░░░░░░░░░░░  42%
```
- **Effect:** glitch
- **Width:** 40
- **Features:** Chaotic colored corruption

### matrix
```
ｦｧｨｩｪｫｬｭｮｯ01█ｦｧｨｩｪｫｬｭｮｯ01█ｦｧｨｩｪｫ  78%
```
- **Effect:** matrix
- **Width:** 50
- **Features:** Flowing kanji animation

### retro
```
8-BIT ▁▂▃▄▅▆▇███▌▌▌▌▌  65%
```
- **Effect:** retro8bit
- **Width:** 35
- **Features:** Colorful pixel blocks

### neon
```
NEON ▓▓▓▓▓▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░  50%
```
- **Effect:** gradient (neon colors)
- **Width:** 40
- **Features:** Vibrant cyan to magenta

### cyberpunk
```
■ CYBER ▓█░▒▓█░▓█░░░░░░░░░░░░░░░░░░░░░░░  55%
```
- **Effect:** glitch
- **Width:** 45
- **Features:** Intense neon colors

### minimal
```
████████░░░░░░░░░░░░░░░░  80%
```
- **Effect:** gradient
- **Width:** 25
- **Features:** No label, clean output

---

## 📚 API Reference

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

---

### Effect Options

#### glitch
- `intensity` (0-1) - Amount of corruption, default: `0.6`
- `colors` (array) - ANSI color codes, default: `['\x1b[36m', '\x1b[35m', '\x1b[33m']`

#### gradient
- `startColor` - ANSI color, default: `'\x1b[38;5;21m'` (blue)
- `endColor` - ANSI color, default: `'\x1b[38;5;226m'` (yellow)
- `emptyColor` - ANSI color, default: `'\x1b[38;5;8m'` (gray)

#### matrix
- `matrixChars` (array) - Characters to animate, default: katakana + numbers
- `flowSpeed` (0-1) - Animation speed, default: `0.015`

#### retro8bit
- `pixelSize` (number) - Pixels per character, default: `2`
- `colors` (array) - ANSI colors for palette rotation

---

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

---

### Spinner API

#### `new Spinner(options)`

Creates a new spinner instance.

**Parameters:**
- `options` (object | string) - Configuration object or spinner style name

**Options Object:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | string | `'Loading'` | Loading text |
| `prefixText` | string | `''` | Text before spinner |
| `suffixText` | string | `''` | Text after spinner |
| `color` | string | `'\x1b[36m'` | ANSI color code |
| `disableSpinner` | boolean | `false` | Disable animated spinner |

**Spinner Style Names:**

20+ styles: `dots`, `dots2`, `dots3`, `line`, `line2`, `pipe`, `simpleDots`, `simpleDotsScrolling`, `star`, `star2`, `flip`, `hamburger`, `growVertical`, `growHorizontal`, `balloon`, `noise`, `bounce`, `arc`, `circle`, `squareCorners`, `cycleQuarters`

#### Spinner Methods

**`start(text?)`** - Start the spinner animation

```javascript
spinner.start('Loading...');
```

**`stop()`** - Stop the spinner

```javascript
spinner.stop();
```

**`setText(text)`** - Update the loading text

```javascript
spinner.setText('Almost done...');
```

**`setColor(color)`** - Change spinner color

```javascript
spinner.setColor('\x1b[32m');  // Green
```

**`succeed(text?)`** - Complete with success (✓)

```javascript
spinner.succeed('Operation successful');
```

**`fail(text?)`** - Complete with failure (✗)

```javascript
spinner.fail('Operation failed');
```

**`warn(text?)`** - Complete with warning (⚠)

```javascript
spinner.warn('Operation completed with warnings');
```

**`info(text?)`** - Complete with info (ℹ)

```javascript
spinner.info('Operation complete');
```

---

## 💡 Examples

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
    const bar = new ProgressBar(task.preset, {
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

### Build Process

```javascript
const { ProgressBar } = require('tlm-cli-progress-fx');

async function buildProject() {
  const stages = [
    { name: 'Compiling', preset: 'matrix' },
    { name: 'Bundling', preset: 'glitch' },
    { name: 'Optimizing', preset: 'neon' }
  ];
  
  for (const stage of stages) {
    const bar = new ProgressBar(stage.preset, {
      label: `🔨 ${stage.name}`,
      showLabel: true
    });
    
    bar.start();
    
    for (let i = 0; i <= 100; i += Math.random() * 15) {
      bar.update(Math.min(i, 100), 100);
      await new Promise(r => setTimeout(r, 100));
    }
    
    bar.finish(`${stage.name} complete`);
  }
}

buildProject();
```

### Using Spinners

```javascript
const { Spinner } = require('tlm-cli-progress-fx');

async function apiOperations() {
  let spinner = new Spinner({
    text: 'Fetching user data...',
    color: '\x1b[36m'
  });

  spinner.start();

  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    spinner.succeed('User data loaded');

    spinner = new Spinner({
      text: 'Processing data...',
      color: '\x1b[33m'
    });

    spinner.start();
    await new Promise(resolve => setTimeout(resolve, 1500));
    spinner.info('Processing complete');

  } catch (error) {
    spinner.fail('Operation failed');
  }
}

apiOperations();
```

---

## 🏗️ Building from Source

### Requirements

- Node.js >= 12.0.0
- npm

### Development

```bash
# Clone repository
git clone https://github.com/quatrecentdouze/tlm-cli-progress-fx.git
cd tlm-cli-progress-fx

# Install dependencies
npm install

# Run all demos
npm run demo

# Run specific demos
npm run demo:basic
npm run demo:custom
npm run demo:realistic

# Run spinner demos
npm run demo:spinner
npm run demo:spinner:all
npm run demo:spinner:states
```

### Project Structure

```
tlm-cli-progress-fx/
├── index.js                    # Main entry point
├── index.d.ts                 # TypeScript definitions
├── lib/
│   ├── index.js               # Core exports
│   ├── progressBar.js         # Main ProgressBar class
│   ├── presets.js             # Preset configurations
│   ├── effects/
│   │   ├── glitch.js
│   │   ├── gradient.js
│   │   ├── matrix.js
│   │   └── retro8bit.js
│   └── spinner/
│       ├── spinner.js         # Main Spinner class
│       └── styles.js          # 20+ spinner styles
├── examples/
│   ├── basic.js
│   ├── all-effects.js
│   ├── custom.js
│   ├── realistic.js
│   ├── spinner-basic.js
│   ├── spinner-all-styles.js
│   ├── spinner-states.js
│   └── typescript.example.ts
├── package.json               # NPM metadata
└── README.md                  # Documentation
```

---

## 🎨 Adding Custom Effects

### Step 1: Create Effect File

Create `lib/effects/custom.js`:

```javascript
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

### Step 2: Register in Core

Update `lib/index.js`:

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

### Step 3: Use It

```javascript
const bar = new ProgressBar({
  effect: 'custom',
  effectOptions: { colors: ['\x1b[91m'] }
});
```

---

## 🎨 ANSI Color Reference

Common ANSI color codes for customization:

```javascript
const colors = {
  // Basic colors (bright)
  brightRed: '\x1b[91m',
  brightGreen: '\x1b[92m',
  brightYellow: '\x1b[93m',
  brightBlue: '\x1b[94m',
  brightMagenta: '\x1b[95m',
  brightCyan: '\x1b[96m',
  
  // Extended 256-color palette
  darkBlue: '\x1b[38;5;21m',
  neon: '\x1b[38;5;51m',
  orange: '\x1b[38;5;208m',
  purple: '\x1b[38;5;165m',
  
  // Modifiers
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m'
};
```

---

## ⚙️ Platform Support

- ✅ Linux
- ✅ macOS
- ✅ Windows (CMD, PowerShell, WSL)
- ✅ Node.js 12+

**Note:** This module is designed for **Node.js CLI environments only**. It will not work in browser environments.

---

## ⚡ Performance

- **Zero dependencies** - No external packages
- **Optimized rendering** - Smooth animations
- **Memory efficient** - Perfect for long-running processes
- **CPU friendly** - Minimal overhead

---

## 📄 License

MIT © 2025

---

## 🤝 Contributing

Contributions are welcome! Please check out [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Links

- [Report a Bug](https://github.com/quatrecentdouze/tlm-cli-progress-fx/issues)
- [Request a Feature](https://github.com/quatrecentdouze/tlm-cli-progress-fx/issues)
- [View Changelog](CHANGELOG.md)

---

## 📞 Support

Need help? Check out the [examples](examples/) folder or open an issue on GitHub.

Happy coding! 🚀
