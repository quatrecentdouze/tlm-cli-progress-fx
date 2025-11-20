# Contributing to tlm-cli-progress-fx

Thank you for your interest in contributing! Here's how you can help.

## Development Setup

```bash
git clone https://github.com/yourusername/tlm-cli-progress-fx.git
cd tlm-cli-progress-fx
npm install
```

## Running Examples

Test the examples to see your changes in action:

```bash
npm run demo              # All effects
npm run demo:basic        # Basic usage
npm run demo:custom       # Custom configuration
npm run demo:realistic    # Realistic scenarios
```

## Project Structure

- `lib/progressBar.js` - Main ProgressBar class
- `lib/effects/` - Effect implementations
- `lib/presets.js` - Preset configurations
- `examples/` - Usage examples
- `index.js` - Package entry point

## Adding Features

### New Effects

1. Create a new file in `lib/effects/youreffect.js`:

```javascript
const yourEffect = {
  name: 'youreffect',
  
  render: (percent, width, options = {}) => {
    // Implementation
    return formattedBar;
  }
};

module.exports = yourEffect;
```

2. Register in `lib/index.js`:

```javascript
const yourEffect = require('./effects/youreffect');

module.exports = {
  // ...
  effects: {
    // ...
    youreffect: yourEffect
  }
};
```

3. Add tests and documentation

### New Presets

Add to `lib/presets.js`:

```javascript
const presets = {
  // ...
  yourpreset: {
    effect: 'gradient',
    width: 40,
    showPercent: true,
    showLabel: true,
    label: 'YOUR',
    effectOptions: {
      // ...
    }
  }
};
```

## Code Style

- Use 2-space indentation
- Use descriptive variable names
- Add comments for complex logic
- Keep functions focused and small

## Testing

Run examples and verify the output looks correct:

```bash
npm run demo
```

## Commit Messages

Use clear, descriptive commit messages:

```
feat: add new blur effect
fix: correct gradient color rendering
docs: update README with new preset
```

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit with descriptive messages
6. Push to the branch
7. Open a Pull Request

## Reporting Issues

When reporting bugs, please include:
- Node.js version
- Terminal/OS
- Minimal code example to reproduce
- Expected vs actual behavior

## Questions?

Open an issue with the `question` label or contact the maintainers.

Happy coding! 🎨
