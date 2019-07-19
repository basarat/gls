import * as typestyle from 'typestyle';
import { GLSProps, SizingProp, StylesProp, ChildPlacementProps, StyleProp } from '../common';
import { createGLSTag, useGLSDefaults, processSizingProp } from '../internal/utils';
import { verticallySpaced } from './vertical';
import { horizontallySpaced } from './horizontal';
import { vertical, horizontal, centerJustified, endJustified, end, center } from '../styles/flex';
// import { horizontal, endJustified, centerJustified, center, end } from '../styles/flex';


/** 
 * Props per mode (vertical/horizontal)
 */
export interface ResponsiveModeProps extends
  StyleProp,
  StylesProp,
  SizingProp,
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
    breakpoint = bp,
    vertical: verticalOptions,
    horizontal: horizontalOptions,

    /** Overridable */
    sizing,
    spacing,
    verticalAlign,
    horizontalAlign,

    ...otherProps
  } = props;

  /** Determine sizings */
  const verticalSizing = (verticalOptions && verticalOptions.sizing != null)
    ? verticalOptions.sizing
    : sizing;
  const horizontalSizing = (horizontalOptions && horizontalOptions.sizing != null)
    ? horizontalOptions.sizing
    : sizing;

  /** Determine spacings  */
  const verticalSpacing = (verticalOptions && verticalOptions.spacing != null) ? verticalOptions.spacing
    : spacing != null ? spacing
      : defaultVerticalSpacing;
  const horizontalSpacing = (horizontalOptions && horizontalOptions.spacing != null) ? horizontalOptions.spacing
    : spacing != null ? spacing
      : defaultHorizontalSpacing;

  /** Determine alignments */
  const verticalModeVerticalAlign =
    (verticalOptions && verticalOptions.verticalAlign != null) ? verticalOptions.verticalAlign
      : verticalAlign != null ? verticalAlign
        : null;
  const verticalModeHorizontalAlign =
    (verticalOptions && verticalOptions.horizontalAlign != null) ? verticalOptions.horizontalAlign
      : horizontalAlign != null ? horizontalAlign
        : null;
  const horizontalModeVerticalAlign =
    (horizontalOptions && horizontalOptions.verticalAlign != null) ? horizontalOptions.verticalAlign
      : verticalAlign != null ? verticalAlign
        : null;
  const horizontalModeHorizontalAlign =
    (horizontalOptions && horizontalOptions.horizontalAlign != null) ? horizontalOptions.horizontalAlign
      : horizontalAlign != null ? horizontalAlign
        : null;

  const klass = typestyle.style(
    /** Till breakpoint: Vertical */
    typestyle.media({ minWidth: 0, maxWidth: breakpoint },
      processSizingProp({ sizing: verticalSizing }),
      vertical,
      verticalSpacing !== 0 && verticallySpaced(verticalSpacing),
      verticalModeVerticalAlign == 'center' && centerJustified,
      verticalModeVerticalAlign == 'bottom' && endJustified,
      verticalModeHorizontalAlign == 'right' && end,
      verticalModeHorizontalAlign == 'center' && center,
      /** styles, style */
    ),
    /** Bigger than breakpoint: Horizontal */
    typestyle.media({ minWidth: breakpoint + 1 },
      processSizingProp({ sizing: horizontalSizing }),
      horizontal,
      horizontalSpacing !== 0 && horizontallySpaced(horizontalSpacing),
      horizontalModeHorizontalAlign == 'right' && endJustified,
      horizontalModeHorizontalAlign == 'center' && centerJustified,
      horizontalModeVerticalAlign == 'center' && center,
      horizontalModeVerticalAlign == 'bottom' && end,
      /** styles, style */
    )
  );
  return createGLSTag(otherProps, klass, 'Responsive');
}
Responsive.displayName = 'Responsive';
