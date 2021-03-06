import { types } from "typestyle";
import React from 'react';

/**
 * Default values for components 
 */
export const GLSDefaults = React.createContext<{
  verticalSpacing?: CSSLength,
  horizontalSpacing?: CSSLength,
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
export type CSSLength = number | string;

/** 
 * Various versions of providing common shorthand properties
 */
export type CSSBox =
  /** top,right,left,bottom */
  | CSSLength
  /** [top & bottom, left & right] */
  | [CSSLength, CSSLength]
  /** [top,right,bottom,left] */
  | [CSSLength, CSSLength, CSSLength, CSSLength]
  /** Individual */
  | { top?: CSSLength, right?: CSSLength, bottom?: CSSLength, left?: CSSLength }

export type Sizing =
  | 'content' /** default */
  | 'stretch' /** Same as `1` */
  | number /** A flex ratio */

/** 
 * Specifies sizing interaction
 */
export interface SizingProp {
  /** 
   * Specifies `sizing` interaction in the main axis
   */
  sizing?: Sizing,
}

export interface CrossAxisAlignProp {
  /** 
   * Allows an item to override its alignment in the parents cross axis
   * e.g. 
   * - allows an item to stretch horizontally in a Vertical(horizontalAlign='left')
   * - allows an item to stretch vertically in a Horizontal(verticalAlign='top')
   */
  crossAxisAlign?: 'start' | 'center' | 'end' | 'stretch';
}

export interface SpacingProp {
  /** Spacing between each child */
  spacing?: CSSLength,
}

export interface VerticalsAlignProps {
  /** Child alignment in vertical axis */
  verticalAlign?: 'top' /** default */ | 'center' | 'bottom',
  /** Child alignment in horizontal axis */
  horizontalAlign?: 'stretch' /** default */ | 'left' | 'center' | 'right',
}

export interface HorizontalsAlignProps {
  /** Child alignment in vertical axis */
  verticalAlign?: 'stretch' /** default */ | 'top' | 'center' | 'bottom' | 'baseline',
  /** Child alignment in horizontal axis */
  horizontalAlign?: 'left' /** default if `reverse = false` */ | 'center' | 'right' /** default if `reverse = true` */,
}

/** 
 * Props accepted by all our container components
 */
export interface BaseProps extends
  ScrollProp,
  PaddingProp,
  SizeProps,
  StylesProp,
  StyleProp,
  ClassNameProp,
  TagProps {
}

/** 
 * Add support for padding
 */
export interface PaddingProp {
  padding?: CSSBox,
}


/** 
 * Add support for explicit size
 */
export interface SizeProps {
  height?: CSSLength,
  minHeight?: CSSLength,
  maxHeight?: CSSLength,

  width?: CSSLength,
  minWidth?: CSSLength,
  maxWidth?: CSSLength,
}

export type Scroll =
  | 'overflow' /** default */
  | 'both'
  | 'vertical'
  | 'horizontal'
  | 'hidden';

/** 
 * Add on anything to add support for controlling the scroll
 */
export interface ScrollProp {
  scroll?: Scroll;
}

/** 
 * Support for mixing in TypeStyle NestedCSSProperties (style function arguments) 
 */
export interface StylesProp {
  styles?: (types.NestedCSSProperties | null | false)[];
}

/** 
 * Support for React `style` property
 */
export interface StyleProp {
  style?: React.CSSProperties
}

/** 
 * Support for React `className` property 
 */
export interface ClassNameProp {
  className?: string
}

/** 
 * Props supported by the underlying tag 
 */
export interface TagProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className' | 'style'> {
  tag?: string,
}
