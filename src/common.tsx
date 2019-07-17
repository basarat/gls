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
 * Various versions of providing common shorthand properties
 */
export type BoxSet =
  /** top,right,left,bottom */
  | BoxUnit
  /** [topBottom,leftRight] */
  | [BoxUnit, BoxUnit]
  /** [top,right,bottom,left] */
  | [BoxUnit, BoxUnit, BoxUnit, BoxUnit]

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
  className?: string,
  style?: React.CSSProperties,
}

/** 
 * Add support for padding
 */
export interface PaddingProp {
  padding?: BoxSet,
}

/** 
 * Add on anything to add support for controlling the scroll
 */
export interface ScrollProp {
  scroll?: 'both' /** default */ | 'vertical' | 'horizontal' | 'disabled';
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
  tag?:
  {
    /** name default: div */
    props: Omit<React.HTMLProps<HTMLDivElement>, 'className' | 'style'>;
  }
  | {
    name: 'div';
    props?: Omit<React.HTMLProps<HTMLDivElement>, 'className' | 'style'>;
  }
  | {
    name: 'button';
    props?: Omit<React.HTMLProps<HTMLButtonElement>, 'className' | 'style'>;
  }
  | {
    name: 'input';
    props?: Omit<React.HTMLProps<HTMLInputElement>, 'className' | 'style'>;
  }
  | {
    name: 'select';
    props?: Omit<React.HTMLProps<HTMLSelectElement>, 'className' | 'style'>;
  }
  | {
    name: 'section';
    props?: Omit<React.HTMLProps<HTMLDivElement>, 'className' | 'style'>;
  }
  | {
    name: 'a';
    props?: Omit<React.HTMLProps<HTMLAnchorElement>, 'className' | 'style'>;
  }
  // TODO: heading paragraph
}
