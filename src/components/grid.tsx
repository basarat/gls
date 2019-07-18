import * as typestyle from 'typestyle';
import * as React from 'react';
import { CSSLength, GLSProps } from '../common';
import { cssLengthToString, createGLSTag, useGLSDefaults } from '../internal/utils';

/**
 * Puts a (horizontal AND vertical) margin between each child
 */
export function gridSpaced(both: CSSLength): string;
export function gridSpaced(topAndBottom: CSSLength, leftAndRight: CSSLength): string;
export function gridSpaced(topAndBottom: CSSLength, leftAndRight = topAndBottom): string {
  const vertical = cssLengthToString(topAndBottom);
  const horizontal = cssLengthToString(leftAndRight);
  return typestyle.style(
    {
      marginTop: '-' + vertical,
      marginLeft: '-' + horizontal,
      $nest: {
        '&>*': {
          marginTop: vertical,
          marginLeft: horizontal,
        }
      }
    }
  );
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

  const klass = gridSpaced(verticalSpacing, horizontalSpacing);
  return (
    createGLSTag(otherProps, klass, 'Grid')
  );
}
Grid.displayName = 'Grid';
