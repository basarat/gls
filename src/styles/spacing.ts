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
    // -margin on parent to cancel the internal margin leaking
    // However this negative margins defeats any margin pushed by a parent (vertical/horizontal etc)
    // We handle this in our grid component rendering `<span>` before itself. So
    // <Vertical> <Something>                                              <Grid>  </Vertical>
    // Renders as:
    // <Vertical> <Something>        <span to accept parent pushed margin> <Grid>  </Vertical>
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
