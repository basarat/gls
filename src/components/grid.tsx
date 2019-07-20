import * as typestyle from 'typestyle';
import * as React from 'react';
import { CSSLength, GLSProps, SizingProp } from '../common';
import { cssLengthToString, createGLSTag, useGLSDefaults, processSizingProp } from '../internal/utils';
import { horizontal, wrap, endJustified, centerJustified, betweenJustified } from '../styles/flex';

/**
 * Puts a (horizontal AND vertical) margin between each child
 */
export function gridSpaced(both: CSSLength): typestyle.types.NestedCSSProperties;
export function gridSpaced(topAndBottom: CSSLength, leftAndRight: CSSLength): typestyle.types.NestedCSSProperties;
export function gridSpaced(topAndBottom: CSSLength, leftAndRight = topAndBottom): typestyle.types.NestedCSSProperties {
  const verticalSpacing = cssLengthToString(topAndBottom);
  const horizontalSpacing = cssLengthToString(leftAndRight);
  return {
    marginTop: '-' + verticalSpacing + ' !important',
    marginLeft: '-' + horizontalSpacing + ' !important',
    $nest: {
      '&>*': {
        marginTop: verticalSpacing + ' !important',
        marginLeft: horizontalSpacing + ' !important',
      }
    }
  };
};

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
  justification?:
  | 'left' /** default */
  | 'center'
  | 'right'
  | 'between'
}

/** 
 * Lays out children with a margin between them (horizontal and vertical)
 */
export const Grid: React.FC<GridProps> = (props) => {
  const {
    sizing,
    spacing,
    justification,
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
    justification == 'center' && centerJustified,
    justification == 'right' && endJustified,
    justification == 'between' && betweenJustified,
  );
  return (
    createGLSTag(otherProps, klass, 'Grid')
  );
}
Grid.displayName = 'Grid';
