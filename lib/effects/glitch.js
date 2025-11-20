const glitch = {
  name: 'glitch',
  
  render: (percent, width, options = {}) => {
    const {
      colors = ['\x1b[36m', '\x1b[35m', '\x1b[33m'],
      intensity = 0.7,
      seed = Math.random()
    } = options;

    const filled = Math.round((width * percent) / 100);
    const empty = width - filled;
    const glitchChars = ['█', '▓', '▒', '░', '▀', '▄', '▌', '▐'];
    
    let bar = '';
    
    for (let i = 0; i < filled; i++) {
      const shouldGlitch = Math.random() < intensity * 0.3;
      if (shouldGlitch) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const char = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        bar += color + char + '\x1b[0m';
      } else {
        bar += colors[i % colors.length] + '█\x1b[0m';
      }
    }
    
    bar += '\x1b[2m' + '░'.repeat(empty) + '\x1b[0m';
    
    return bar;
  }
};

module.exports = glitch;
