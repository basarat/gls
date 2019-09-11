import * as typestyle from 'typestyle';
import * as React from 'react';
import { CSSLength, BaseProps, SizingProp } from '../common';
import { createBaseTag, useGLSDefaults, _processSizing } from '../internal/utils';
import { horizontal, wrap, endJustified, centerJustified, betweenJustified, aroundJustified } from '../styles/flex';
import { gridSpaced } from '../styles/spacing';

export interface GridProps extends BaseProps, SizingProp {
  /** 
   * Minimum spacing between children
   */
  spacing?:
  | CSSLength
  | [/** Vertical */ CSSLength, /** Horizontal */ CSSLength]

  /** 
   * Controls how the extra space around the children is handled
   */
  justify?:
  /** Controls by content */
  | 'left' /** default */
  | 'center'
  | 'right'
  /** Controls by space */
  | 'space-between'
  | 'space-around'
}

/** 
 * Lays out children with a margin between them (horizontal and vertical)
 */
export const Grid = React.forwardRef((props: GridProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    sizing,
    spacing,
    justify,
    ...otherProps } = props;

  /** 
   * Figure out the spacing requested 
   */
  let { verticalSpacing, horizontalSpacing } = useGLSDefaults();
  if (spacing != null) {
    if (typeof spacing == 'number' || typeof spacing == 'string') {
      horizontalSpacing = spacing;
      verticalSpacing = horizontalSpacing;
    } else {
      [verticalSpacing, horizontalSpacing] = spacing;
    }
  }

  const klass = typestyle.style(
    _processSizing(sizing),
    horizontal, wrap,
    gridSpaced(verticalSpacing, horizontalSpacing),
    justify == 'center' && centerJustified,
    justify == 'right' && endJustified,
    justify == 'space-between' && betweenJustified,
    justify == 'space-around' && aroundJustified,
  );
  return (
    createBaseTag(otherProps, klass, 'Grid', ref)
  );
});
Grid.displayName = 'Grid';
