import * as typestyle from 'typestyle';
import * as React from 'react';
import { CSSLength, GLSProps, SizingProp } from '../common';
import { createGLSTag, useGLSDefaults, processSizingProp } from '../internal/utils';
import { horizontal, wrap, endJustified, centerJustified, betweenJustified } from '../styles/flex';
import { gridSpaced } from '../styles/spacing';

export interface GridProps extends GLSProps, SizingProp {
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
  | 'content-left' /** default */
  | 'content-center'
  | 'content-right'
  /** Controls by space */
  | 'space-between'
}

/** 
 * Lays out children with a margin between them (horizontal and vertical)
 */
export const Grid: React.FC<GridProps> = (props) => {
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
    processSizingProp(props),
    horizontal, wrap,
    gridSpaced(verticalSpacing, horizontalSpacing),
    justify == 'content-center' && centerJustified,
    justify == 'content-right' && endJustified,
    justify == 'space-between' && betweenJustified,
  );
  return (
    createGLSTag(otherProps, klass, 'Grid')
  );
}
Grid.displayName = 'Grid';
