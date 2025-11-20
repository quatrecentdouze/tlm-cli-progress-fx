# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-20

### Added
- Initial release of tlm-cli-progress-fx
- 4 core effects:
  - **Glitch** - Corrupted characters with color shifts
  - **Gradient** - Smooth 16-color gradient animation
  - **Matrix** - Animated kanji characters (Matrix style)
  - **Retro 8-bit** - Pixelated retro aesthetic
- 7 ready-to-use presets:
  - default
  - glitch
  - matrix
  - retro
  - neon
  - cyberpunk
  - minimal
- ProgressBar class with:
  - `render()` - Get formatted progress bar string
  - `update()` - Update terminal with current progress
  - `start()` - Initialize and start timing
  - `finish()` - Complete the progress bar
- Fully customizable options:
  - Effect selection
  - Width, colors, intensity
  - Labels and percentage display
  - Custom characters and animations
- Comprehensive documentation (README.md)
- Contributing guidelines (CONTRIBUTING.md)
- Example scripts for all effects and use cases
- MIT License

### Features
- Zero external dependencies
- Terminal animation optimization
- Cross-platform support (Linux, macOS, Windows)
- Node.js 12+ support
- Clean, intuitive API

---

## Future Releases

Planned features for upcoming versions:
- TypeScript definitions (.d.ts)
- Speed/ETA calculation
- Spinner animations
- Multi-line progress bars
- Custom shape support
- Browser compatibility layer (optional)

## How to Report Issues

If you encounter any issues or have feature requests, please open an issue on GitHub with:
- Node.js version
- Terminal/OS details
- Code example to reproduce
- Expected vs actual behavior
