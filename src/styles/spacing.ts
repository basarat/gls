import * as typestyle from 'typestyle';
import { CSSLength } from "../common";
import { cssLengthToString } from '../internal/utils';

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
