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
 * 
 * And generate a CSS classname from it.
 */
export type BoxFunction = (all: Box) => string;

/** 
 * DataStructure for common prop tuple representation 
 */
export type Box =
  /** top,right,bottom,left */
  | BoxUnit
  /** Top&Bottom, Left&Right */
  | [BoxUnit, BoxUnit]
  /** Top, Right, Bottom, Left */
  | [BoxUnit, BoxUnit, BoxUnit, BoxUnit];

/** 
 * Props accepted by all our components 
 */
export interface GLSProps extends React.HTMLProps<HTMLDivElement> {
  scroll?: 'both' | 'vertical' | 'horizontal';
  padding?: Box;
}
