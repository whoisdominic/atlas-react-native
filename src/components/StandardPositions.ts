export interface StandardPositions {
  /** Padding */
  padLeft?: number;
  padRight?: number;
  padTop?: number;
  padBottom?: number;

  /** Margin */
  marLeft?: number;
  marRight?: number;
  marTop?: number;
  marBottom?: number;

  /** Margin: main = horizontal, cross = vertical */
  marMain?: number;
  marCross?: number;

  /** Padding: main = horizontal, cross = vertical */
  padMain?: number;
  padCross?: number;

  /** Margin & Padding: All sides */
  padding?: number;
  margin?: number;
}
