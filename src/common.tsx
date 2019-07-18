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

/** 
 * Specifies sizing interaction
 */
export interface SizingProp {
  /** 
   * Specifies `sizing` interaction
   */
  sizing?:
  | 'content' /** default */
  | 'flex' /** Same as `1` */
  | number /** A flex ratio */;
}

/** 
 * Props accepted by all our container components
 */
export interface GLSProps extends PaddingProp, SizeProps, ScrollProp, StylesProp, TagProps {
  className?: string,
  style?: React.CSSProperties,
}

/** 
 * Add support for padding
 */
export interface PaddingProp {
  padding?: CSSBox,
}


/** 
 * Add support for explicit sizing
 */
export interface SizeProps {
  height?: CSSLength,
  minHeight?: CSSLength,
  maxHeight?: CSSLength,

  width?: CSSLength,
  minWidth?: CSSLength,
  maxWidth?: CSSLength,
}

/** 
 * Add on anything to add support for controlling the scroll
 */
export interface ScrollProp {
  scroll?:
  | 'overflow' /** default */
  | 'both'
  | 'vertical'
  | 'horizontal'
  | 'disable';
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
