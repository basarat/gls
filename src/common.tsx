import { types } from "typestyle";
import React from 'react';

/**
 * Default values for components 
 */
export const GLSDefaults = React.createContext<{
  verticalSpacing?: BoxUnit,
  horizontalSpacing?: BoxUnit,
  breakpoint?: number
}>({
  verticalSpacing: 24,
  horizontalSpacing: 24,
  breakpoint: 480,
});

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
 * Constrained set of supported flex ratios
 */
export type FlexGrow =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

/** 
 * Specifies `flex` interaction with parent 
 */
export interface FlexProp {
  /** 
   * Specifies `flex` interaction with parent 
   */
  flex?:
  | 'content' /** default */
  | 'flex' /** Same as `1` */
  | FlexGrow;
}

/** 
 * Props accepted by all our container components
 */
export interface GLSProps extends PaddingProp, ScrollProp, StylesProp, TagProps {
  className: string,
}

/** 
 * Add support for padding
 */
export interface PaddingProp {
  padding?: BoxUnit | [BoxUnit, BoxUnit] | [BoxUnit, BoxUnit, BoxUnit, BoxUnit]
}

/** 
 * Add on anything to add support for controlling the scroll
 */
export interface ScrollProp {
  scroll?: 'both' | 'vertical' | 'horizontal' | 'disabled';
}

/** 
 * Add to add support for mixing in NestedCSSProperties 
 */
export interface StylesProp {
  styles?: (types.NestedCSSProperties | null | false)[];
}

/** 
 * Props supported by the underlying tag 
 */
export interface TagProps {
  tag:
  {
    /** name default: div */
    props: Omit<React.HTMLProps<HTMLDivElement>, 'className'>;
  }
  | {
    name: 'div';
    props?: Omit<React.HTMLProps<HTMLDivElement>, 'className'>;
  }
  | {
    name: 'button';
    props?: Omit<React.HTMLProps<HTMLButtonElement>, 'className'>;
  }
  | {
    name?: 'input';
    props?: Omit<React.HTMLProps<HTMLInputElement>, 'className'>;
  }
  | {
    name?: 'select';
    props?: Omit<React.HTMLProps<HTMLSelectElement>, 'className'>;
  }
  | {
    name?: 'section';
    props?: Omit<React.HTMLProps<HTMLDivElement>, 'className'>;
  }
  | {
    name?: 'a';
    props?: Omit<React.HTMLProps<HTMLAnchorElement>, 'className'>;
  }
  // TODO: heading paragraph
}
