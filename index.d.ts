export interface EffectOptions {
  intensity?: number;
  colors?: string[];
  startColor?: string;
  endColor?: string;
  emptyColor?: string;
  matrixChars?: string[];
  flowSpeed?: number;
  pixelSize?: number;
  [key: string]: any;
}

export interface ProgressBarOptions {
  effect?: 'glitch' | 'gradient' | 'matrix' | 'retro8bit';
  width?: number;
  label?: string;
  showLabel?: boolean;
  showPercent?: boolean;
  effectOptions?: EffectOptions;
}

export interface PresetConfig extends ProgressBarOptions {
  effect: 'glitch' | 'gradient' | 'matrix' | 'retro8bit';
}

export interface Effect {
  name: string;
  render: (percent: number, width: number, options?: EffectOptions) => string;
}

export type PresetName = 'default' | 'glitch' | 'matrix' | 'retro' | 'neon' | 'cyberpunk' | 'minimal';

export interface Presets {
  default: PresetConfig;
  glitch: PresetConfig;
  matrix: PresetConfig;
  retro: PresetConfig;
  neon: PresetConfig;
  cyberpunk: PresetConfig;
  minimal: PresetConfig;
}

export interface Effects {
  glitch: Effect;
  gradient: Effect;
  matrix: Effect;
  retro8bit: Effect;
}

export type SpinnerStyleName =
  | 'dots'
  | 'dots2'
  | 'dots3'
  | 'line'
  | 'line2'
  | 'pipe'
  | 'simpleDots'
  | 'simpleDotsScrolling'
  | 'star'
  | 'star2'
  | 'flip'
  | 'hamburger'
  | 'growVertical'
  | 'growHorizontal'
  | 'balloon'
  | 'noise'
  | 'bounce'
  | 'arc'
  | 'circle'
  | 'squareCorners'
  | 'cycleQuarters';

export interface SpinnerStyle {
  name: string;
  frames: string[];
  interval: number;
}

export interface SpinnerOptions {
  text?: string;
  prefixText?: string;
  suffixText?: string;
  color?: string;
  disableSpinner?: boolean;
}

export interface SpinnerStyles {
  [key in SpinnerStyleName]: SpinnerStyle;
}

export class Spinner {
  constructor(options?: SpinnerOptions | SpinnerStyleName);

  render(): string;

  start(text?: string): Spinner;

  stop(): Spinner;

  setText(text: string): Spinner;

  setColor(color: string): Spinner;

  succeed(text?: string): Spinner;

  fail(text?: string): Spinner;

  warn(text?: string): Spinner;

  info(text?: string): Spinner;

  static create(options?: SpinnerOptions | SpinnerStyleName): Spinner;
}

export class ProgressBar {
  constructor(options?: ProgressBarOptions | PresetName);

  render(current?: number, total?: number): string;

  update(current: number, total: number): void;

  start(): void;

  finish(text?: string): void;

  static create(options?: ProgressBarOptions | PresetName): ProgressBar;
}

export const presets: Presets;
export const effects: Effects;
export const spinnerStyles: SpinnerStyles;

export default ProgressBar;
