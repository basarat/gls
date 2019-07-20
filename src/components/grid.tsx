import * as typestyle from 'typestyle';
import * as React from 'react';
import { CSSLength, GLSProps } from '../common';
import { cssLengthToString, createGLSTag, useGLSDefaults } from '../internal/utils';

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

export interface GridProps extends GLSProps {
  spacing?:
  | CSSLength
  | [CSSLength, CSSLength]
}

/** 
 * Lays out children with a margin between them (horizontal and vertical)
 */
export const Grid: React.FC<GridProps> = (props) => {
  const { spacing, ...otherProps } = props;

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
    gridSpaced(verticalSpacing, horizontalSpacing),
  );
  return (
    createGLSTag(otherProps, klass, 'Grid')
  );
}
Grid.displayName = 'Grid';
