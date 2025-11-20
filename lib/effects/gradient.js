const gradient = {
  name: 'gradient',
  
  render: (percent, width, options = {}) => {
    const {
      startColor = '\x1b[38;5;21m',
      endColor = '\x1b[38;5;226m',
      emptyColor = '\x1b[38;5;8m'
    } = options;

    const filled = Math.round((width * percent) / 100);
    const empty = width - filled;
    
    const colors256 = [
      '\x1b[38;5;21m',
      '\x1b[38;5;27m',
      '\x1b[38;5;33m',
      '\x1b[38;5;39m',
      '\x1b[38;5;45m',
      '\x1b[38;5;51m',
      '\x1b[38;5;50m',
      '\x1b[38;5;49m',
      '\x1b[38;5;48m',
      '\x1b[38;5;47m',
      '\x1b[38;5;46m',
      '\x1b[38;5;82m',
      '\x1b[38;5;118m',
      '\x1b[38;5;154m',
      '\x1b[38;5;190m',
      '\x1b[38;5;226m'
    ];

    let bar = '';
    
    for (let i = 0; i < filled; i++) {
      const ratio = i / filled;
      const colorIndex = Math.floor(ratio * (colors256.length - 1));
      bar += colors256[colorIndex] + '█\x1b[0m';
    }
    
    bar += emptyColor + '░'.repeat(empty) + '\x1b[0m';
    
    return bar;
  }
};

module.exports = gradient;
