const retro8bit = {
  name: 'retro8bit',
  
  render: (percent, width, options = {}) => {
    const {
      palette = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'],
      colors = ['\x1b[91m', '\x1b[92m', '\x1b[93m', '\x1b[94m', '\x1b[95m', '\x1b[96m'],
      pixelSize = 2
    } = options;

    const filled = Math.round((width * percent) / 100);
    const empty = width - filled;
    
    let bar = '';
    const chunks = Math.ceil(filled / pixelSize);
    
    for (let i = 0; i < chunks; i++) {
      const color = colors[i % colors.length];
      const paletteIndex = Math.min(palette.length - 1, i % palette.length);
      const char = palette[paletteIndex];
      bar += color + char + '\x1b[0m';
    }
    
    const emptyChunks = Math.ceil(empty / pixelSize);
    bar += '\x1b[90m' + '▌'.repeat(emptyChunks) + '\x1b[0m';
    
    return bar;
  }
};

module.exports = retro8bit;
