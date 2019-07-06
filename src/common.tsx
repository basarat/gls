import { types } from "typestyle";
import React from 'react';

/** 
 * Default spacing used in the Vertical axis
 */
export const {
  Provider: VerticalSpacingProvider,
  Consumer: VerticalSpacingConsumer
} = React.createContext(24);

/** 
 * Default spacing used in the Horizontal axis
 */
export const {
  Provider: HorizontalSpacingProvider,
  Consumer: HorizontalSpacingConsumer
} = React.createContext(24);

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
 * Props accepted by all our components 
 */
export interface GLSProps extends React.HTMLProps<HTMLDivElement> {
  scroll?: 'both' | 'vertical' | 'horizontal' | 'disabled';
  styles?: [types.NestedCSSProperties | null | false]
}
