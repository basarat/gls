import { HorizontalProps } from './horizontal';
import { VerticalProps } from './vertical';
import { GLSProps, SizingProp } from '../common';
// import * as typestyle from 'typestyle';
// import { horizontal, endJustified, centerJustified, center, end } from '../styles/flex';
// import { createGLSTag, useGLSDefaults, processFlexProp } from '../internal/utils';

export interface ResponsiveConditionalProps {
}

export interface ResponsiveProps extends GLSProps, SizingProp, ResponsiveConditionalProps {
  /** 
   * windowWidth <= breakpoint : it is vertical (mobile)
   * else                      : it is horizontal (desktop)
   **/
  breakpoint?: number;

  /** Horizontal mode configuration */
  horizontal?: ResponsiveConditionalProps;

  /** Vertical mode configuration */
  vertical?: ResponsiveConditionalProps;
}

/** 
 * Layout out children 
 * - vertically till breakpoint
 * - horizontally above breakpoint
 */
// export const Responsive: React.FC<ResponsiveProps> = (props) => {
//   const {
//     horizontalAlign,
//     verticalAlign,
//     flex,
//     ...otherProps
//   } = props;

//   const { verticalSpacing } = useGLSDefaults();

//   const klass = typestyle.style(
//     processFlexProp(props),
//     vertical,
//     verticallySpaced(props.spacing == null ? verticalSpacing : props.spacing),
//     verticalAlign == 'center' && centerJustified,
//     verticalAlign == 'bottom' && endJustified,
//     horizontalAlign == 'right' && end,
//     horizontalAlign == 'center' && center,
//   );
//   return createGLSTag(otherProps, klass, 'Responsive');
// }
// Responsive.displayName = 'Responsive';
