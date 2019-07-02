/** 
 * The default spacing used by the layout components 
 * You can customize it e.g. 
 * ```ts
 * import { Spacing } from 'gls';
 * Spacing.vertical = 30;
 * ```
 */
export const Spacing = {
  vertical: 24,
  horizontal: 24,
  grid: {
    vertical: 24,
    horizontal: 24,
  }
}

/** 
 * Example: 
 * - 5 (implies 5px)
 * - '5rem'
 */
export type BoxUnit = number | string;

/**
 * A box function is something that can take:
 * - all
 * - topAndBottom + leftRight
 * - top + right + bottom + left
 */
export interface BoxFunction<T> {
  (all: BoxUnit): T;
  (topAndBottom: BoxUnit, leftAndRight: BoxUnit): T;
  (top: BoxUnit, right: BoxUnit, bottom: BoxUnit, left: BoxUnit): T;
}

/**
 * Common props for a box
 */
export type Box = {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

/** 
 * Props accepted by all our components 
 */
export interface GLSProps extends React.HTMLProps<HTMLDivElement> {
  scroll?: 'both' | 'vertical' | 'horizontal';
  padding?: BoxUnit;
}
