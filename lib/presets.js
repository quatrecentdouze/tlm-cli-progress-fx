const presets = {
  default: {
    effect: 'gradient',
    width: 30,
    showPercent: true,
    showLabel: true,
    label: 'Progress'
  },
  
  glitch: {
    effect: 'glitch',
    width: 40,
    showPercent: true,
    showLabel: true,
    label: 'SYSTEM',
    effectOptions: {
      intensity: 0.6,
      colors: ['\x1b[36m', '\x1b[35m', '\x1b[33m']
    }
  },
  
  matrix: {
    effect: 'matrix',
    width: 50,
    showPercent: true,
    showLabel: false,
    effectOptions: {
      flowSpeed: 0.5
    }
  },
  
  retro: {
    effect: 'retro8bit',
    width: 35,
    showPercent: true,
    showLabel: true,
    label: '8-BIT',
    effectOptions: {
      pixelSize: 1,
      colors: ['\x1b[91m', '\x1b[92m', '\x1b[93m', '\x1b[94m', '\x1b[95m', '\x1b[96m', '\x1b[97m']
    }
  },
  
  neon: {
    effect: 'gradient',
    width: 40,
    showPercent: true,
    showLabel: true,
    label: 'NEON',
    effectOptions: {
      startColor: '\x1b[38;5;201m',
      endColor: '\x1b[38;5;51m'
    }
  },
  
  cyberpunk: {
    effect: 'glitch',
    width: 45,
    showPercent: true,
    showLabel: true,
    label: '■ CYBER',
    effectOptions: {
      intensity: 0.8,
      colors: ['\x1b[38;5;201m', '\x1b[38;5;51m', '\x1b[38;5;226m']
    }
  },
  
  minimal: {
    effect: 'gradient',
    width: 25,
    showPercent: true,
    showLabel: false
  }
};

module.exports = presets;
