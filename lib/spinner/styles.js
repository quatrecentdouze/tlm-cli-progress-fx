const styles = {
  dots: {
    name: 'dots',
    frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
    interval: 80
  },

  dots2: {
    name: 'dots2',
    frames: ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'],
    interval: 80
  },

  dots3: {
    name: 'dots3',
    frames: ['⠋', '⠙', '⠚', '⠞', '⠖', '⠦', '⠴', '⠲', '⠳', '⠓'],
    interval: 80
  },

  line: {
    name: 'line',
    frames: ['-', '\\', '|', '/'],
    interval: 130
  },

  line2: {
    name: 'line2',
    frames: ['⠂', '-', '–', '—', '–', '-'],
    interval: 100
  },

  pipe: {
    name: 'pipe',
    frames: ['┤', '┘', '┴', '└', '├', '┌', '┬', '┐'],
    interval: 100
  },

  simpleDots: {
    name: 'simpleDots',
    frames: ['.  ', '.. ', '...', '   '],
    interval: 400
  },

  simpleDotsScrolling: {
    name: 'simpleDotsScrolling',
    frames: ['.  ', '.. ', '...', ' ..', '  .', '   '],
    interval: 200
  },

  star: {
    name: 'star',
    frames: ['✶', '✸', '✹', '✺', '✹', '✷'],
    interval: 70
  },

  star2: {
    name: 'star2',
    frames: ['+', 'x', '*'],
    interval: 80
  },

  flip: {
    name: 'flip',
    frames: ['___-', '__--', '_---', '----', '---_', '--__', '-___', '____'],
    interval: 70
  },

  hamburger: {
    name: 'hamburger',
    frames: ['☱', '☲', '☴'],
    interval: 100
  },

  growVertical: {
    name: 'growVertical',
    frames: ['▁', '▃', '▄', '▅', '▆', '▇', '▆', '▅', '▄', '▃'],
    interval: 120
  },

  growHorizontal: {
    name: 'growHorizontal',
    frames: ['▏', '▎', '▍', '▌', '▋', '▊', '▉', '▊', '▋', '▌', '▍', '▎'],
    interval: 120
  },

  balloon: {
    name: 'balloon',
    frames: [' ', '.', 'o', 'O', '@', '*', ' '],
    interval: 140
  },

  noise: {
    name: 'noise',
    frames: ['▓', '▒', '░'],
    interval: 100
  },

  bounce: {
    name: 'bounce',
    frames: ['⠁', '⠂', '⠄', '⠂'],
    interval: 120
  },

  arc: {
    name: 'arc',
    frames: ['◜', '◠', '◝', '◞', '◡', '◟'],
    interval: 100
  },

  circle: {
    name: 'circle',
    frames: ['◡', '⊙', '◠'],
    interval: 120
  },

  squareCorners: {
    name: 'squareCorners',
    frames: ['◰', '◳', '◲', '◱'],
    interval: 120
  },

  cycleQuarters: {
    name: 'cycleQuarters',
    frames: ['◴', '◷', '◶', '◵'],
    interval: 120
  }
};

module.exports = styles;
