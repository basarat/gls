import * as typestyle from 'typestyle';
import { CSSLength } from "../common";
import { cssLengthToString } from '../internal/utils';

/**
 * Puts a vertical margin between each child
 */
export const verticallySpaced = (margin: CSSLength) => {
  const spacing = cssLengthToString(margin);
  return (
    {
      '&>*+*': {
        marginTop: spacing + ' !important'
      }
    } as typestyle.types.NestedCSSProperties
  );
};

/**
 * Puts a horizontal margin between each child
 */
export const horizontallySpaced = (margin: CSSLength) => {
  const spacing = cssLengthToString(margin);
  return (
    {
      '&>*+*': {
        marginLeft: spacing + ' !important'
      }
    } as typestyle.types.CSSProperties
  );
};

/**
 * Puts a (horizontal AND vertical) margin between each child
 */
export function gridSpaced(both: CSSLength): typestyle.types.NestedCSSProperties;
export function gridSpaced(topAndBottom: CSSLength, leftAndRight: CSSLength): typestyle.types.NestedCSSProperties;
export function gridSpaced(topAndBottom: CSSLength, leftAndRight = topAndBottom): typestyle.types.NestedCSSProperties {
  const verticalSpacing = cssLengthToString(topAndBottom);
  const horizontalSpacing = cssLengthToString(leftAndRight);
  return {
    // -margin on parent to cancel the internal margin leaking is from:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items
    // Issue not mentioned in the article but experienced in real world:
    //   negative margins at the border defeat any margin pushed by a parent (vertical/horizontal etc)
    //   So to seperate a grid from its sibilings you will still need to use some spacer
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
