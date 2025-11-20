// matrix.js
const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const BRIGHT_GREEN = '\x1b[92m';
const DIM = '\x1b[2m';

const matrix = {
    name: 'matrix',

    /**
     * percent: 0–100
     * width: nombre de "cases" du bar
     * options:
     *  - matrixChars: tableau de caractères utilisés
     *  - time: pour l’animation (ex: Date.now())
     *  - flowSpeed: vitesse de défilement
     *  - tailSize: longueur de la traîne lumineuse
     */
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
            // On fait défiler les caractères en fonction du temps et de la position
            const offset = Math.floor((time * flowSpeed + i * 3) % matrixChars.length);
            const char = matrixChars[offset];

            const distanceFromHead = (filled - 1) - i; // 0 = "head", >0 = traîne

            let colorPrefix = '';
            if (distanceFromHead === 0) {
                // Head : bien lumineux
                colorPrefix = BRIGHT_GREEN;
            } else if (distanceFromHead <= tailSize) {
                // Traîne proche : vert normal
                colorPrefix = GREEN;
            } else {
                // Traîne lointaine : vert dim
                colorPrefix = DIM + GREEN;
            }

            bar += colorPrefix + char + RESET;
        }

        // Partie non remplie : fond sombre, discret
        if (empty > 0) {
            bar += DIM + '·'.repeat(empty) + RESET;
        }

        return bar;
    }
};

module.exports = matrix;
