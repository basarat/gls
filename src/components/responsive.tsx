import * as typestyle from 'typestyle';
import { GLSProps, SizingProp, StylesProp, ChildPlacementProps, StyleProp } from '../common';
import { createGLSTag, useGLSDefaults } from '../internal/utils';
import { verticallySpaced } from './vertical';
import { horizontallySpaced } from './horizontal';
import { vertical, horizontal } from '../styles/flex';
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
    verticalSpacing: defaultVerticalSpacing,
    horizontalSpacing: defaultHorizontalSpacing,
    breakpoint: bp
  } = useGLSDefaults();

  const {
    sizing,
    breakpoint = bp,
    vertical: verticalOptions,
    horizontal: horizontalOptions,

    /** Overridable */
    spacing,
    horizontalAlign,
    verticalAlign,

    ...otherProps
  } = props;

  /** Determine spacings  */
  const verticalSpacing = (verticalOptions && verticalOptions.spacing != null) ? verticalOptions.spacing
    : spacing != null ? spacing
      : defaultVerticalSpacing;
  const horizontalSpacing = (horizontalOptions && horizontalOptions.spacing != null) ? horizontalOptions.spacing
    : spacing != null ? spacing
      : defaultHorizontalSpacing;

  const klass = typestyle.style(
    /** Till breakpoint: Vertical */
    typestyle.media(
      { minWidth: 0, maxWidth: breakpoint },
      vertical,
      verticallySpaced(verticalSpacing),
      /** TODO: remaining vertical props */
    ),
    /** Bigger than breakpoint: Horizontal */
    typestyle.media({ minWidth: breakpoint + 1 },
      horizontal,
      horizontallySpaced(horizontalSpacing),
      /** TODO: remaining horizontal props */
    )
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
