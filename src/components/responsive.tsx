import * as typestyle from 'typestyle';
import { GLSProps, SizingProp, StylesProp, ChildPlacementProps, StyleProp } from '../common';
import { createGLSTag } from '../internal/utils';
// import { horizontal, endJustified, centerJustified, center, end } from '../styles/flex';


/** 
 * Props per mode (vertical/horizontal)
 */
export interface ResponsiveModeProps extends
  StyleProp,
  StylesProp,
  /** 
   * Defaults for `ChildPlacementProps` can be provided at the `ResponsiveProps` level 
   **/
  ChildPlacementProps {
}

/** 
 * Props for the Responsive component
 */
export interface ResponsiveProps extends GLSProps, SizingProp, ChildPlacementProps {
  /** 
   * windowWidth <= breakpoint : it is vertical (mobile)
   * else                      : it is horizontal (desktop)
   **/
  breakpoint?: number;

  /** Vertical mode configuration */
  vertical?: ResponsiveModeProps;

  /** Horizontal mode configuration */
  horizontal?: ResponsiveModeProps;
}

/**
 * Layout out children
 * - vertically till breakpoint
 * - horizontally above breakpoint
 */
export const Responsive: React.FC<ResponsiveProps> = (props) => {
  const {
    horizontalAlign,
    verticalAlign,
    spacing,
    sizing,
    ...otherProps
  } = props;

  // const { verticalSpacing, horizontalSpacing, breakpoint } = useGLSDefaults();

  const klass = typestyle.style(
  //   typestyle.media({},
  //   )
  //   // processSizingProp(props),
  //   // vertical,
  //   // verticallySpaced(props.spacing == null ? verticalSpacing : props.spacing),
  //   // verticalAlign == 'center' && centerJustified,
  //   // verticalAlign == 'bottom' && endJustified,
  //   // horizontalAlign == 'right' && end,
  //   // horizontalAlign == 'center' && center,
  );
  return createGLSTag(otherProps, klass, 'Responsive');
}
Responsive.displayName = 'Responsive';
