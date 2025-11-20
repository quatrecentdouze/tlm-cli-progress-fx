const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const BRIGHT_GREEN = '\x1b[92m';
const DIM = '\x1b[2m';

const matrix = {
    name: 'matrix',

    render: (percent, width, options = {}) => {
        const {
            matrixChars = ['ｦ', 'ｧ', 'ｨ', 'ｩ', 'ｪ', 'ｫ', 'ｬ', 'ｭ', 'ｮ', 'ｯ', '0', '1', '█'],
            flowSpeed = 0.015,
            time = Date.now(),
            tailSize = 4,
        } = options;

        const safePercent = Math.max(0, Math.min(100, percent));
        const filled = Math.round((width * safePercent) / 100);
        const empty = width - filled;

        let bar = '';

        for (let i = 0; i < filled; i++) {
            const offset = Math.floor((time * flowSpeed + i * 3) % matrixChars.length);
            const char = matrixChars[offset];

            const distanceFromHead = (filled - 1) - i;

            let colorPrefix = '';
            if (distanceFromHead === 0) {
                colorPrefix = BRIGHT_GREEN;
            } else if (distanceFromHead <= tailSize) {
                colorPrefix = GREEN;
            } else {
                colorPrefix = DIM + GREEN;
            }

            bar += colorPrefix + char + RESET;
        }

        if (empty > 0) {
            bar += DIM + '·'.repeat(empty) + RESET;
        }

        return bar;
    }
};

module.exports = matrix;
