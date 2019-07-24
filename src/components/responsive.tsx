import * as typestyle from 'typestyle';
import { BaseProps, SizingProp, StylesProp, StyleProp, SpacingProp } from '../common';
import { createBagTag, useGLSDefaults, processSizingProp } from '../internal/utils';
import { vertical, horizontal, centerJustified, endJustified, end, center, start } from '../styles/flex';
import { verticallySpaced, horizontallySpaced } from '../styles/spacing';


/** 
 * Props that can be specified at root of `Responsive` and overridden for `vertical`/`horizontal` options
 */
export interface ResponsiveOverridableProps extends
  SizingProp, SpacingProp {
}

/** 
 * Props for Vertical mode
 */
export interface ResponsiveVerticalModeProps extends
  StylesProp,
  ResponsiveOverridableProps {

  /** Child alignment in vertical axis */
  verticalAlign?: 'top' /** default */ | 'center' | 'bottom',
  /** Child alignment in horizontal axis */
  horizontalAlign?: 'stretch' /** default */ | 'left' | 'center' | 'right',

}

/** 
 * Props for Horizontal mode
 */
export interface ResponsiveHorizontalModeProps extends
  StylesProp,
  ResponsiveOverridableProps {

  /** Child alignment in vertical axis */
  verticalAlign?: 'stretch' /** default */ | 'top' | 'center' | 'bottom',
  /** Child alignment in horizontal axis */
  horizontalAlign?: 'left' /** default */ | 'center' | 'right',

}

/** 
 * Props for the Responsive component
 */
export interface ResponsiveProps extends BaseProps, ResponsiveOverridableProps {
  /** 
   * windowWidth <= breakpoint : it is vertical (mobile)
   * else                      : it is horizontal (desktop)
   **/
  breakpoint?: number;

  /** Vertical mode configuration */
  vertical?: ResponsiveVerticalModeProps;

  /** Horizontal mode configuration */
  horizontal?: ResponsiveHorizontalModeProps;
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
    (verticalOptions && verticalOptions.verticalAlign != null)
      ? verticalOptions.verticalAlign
      : null;
  const verticalModeHorizontalAlign =
    (verticalOptions && verticalOptions.horizontalAlign != null)
      ? verticalOptions.horizontalAlign
      : null;
  const horizontalModeVerticalAlign =
    (horizontalOptions && horizontalOptions.verticalAlign != null)
      ? horizontalOptions.verticalAlign
      : null;
  const horizontalModeHorizontalAlign =
    (horizontalOptions && horizontalOptions.horizontalAlign != null)
      ? horizontalOptions.horizontalAlign
      : null;

  const klass = typestyle.style(
    /** Till breakpoint: Vertical */
    typestyle.media({ minWidth: 0, maxWidth: breakpoint },
      processSizingProp({ sizing: verticalSizing }),
      vertical,
      verticalSpacing !== 0 && verticallySpaced(verticalSpacing),
      verticalModeVerticalAlign == 'center' && centerJustified,
      verticalModeVerticalAlign == 'bottom' && endJustified,
      verticalModeHorizontalAlign == 'left' && start,
      verticalModeHorizontalAlign == 'right' && end,
      verticalModeHorizontalAlign == 'center' && center,
    ),
    verticalOptions && verticalOptions.styles && typestyle.media({ minWidth: 0, maxWidth: breakpoint },
      ...verticalOptions.styles),

    /** Bigger than breakpoint: Horizontal */
    typestyle.media({ minWidth: breakpoint + 1 },
      processSizingProp({ sizing: horizontalSizing }),
      horizontal,
      horizontalSpacing !== 0 && horizontallySpaced(horizontalSpacing),
      horizontalModeHorizontalAlign == 'right' && endJustified,
      horizontalModeHorizontalAlign == 'center' && centerJustified,
      horizontalModeVerticalAlign == 'top' && start,
      horizontalModeVerticalAlign == 'center' && center,
      horizontalModeVerticalAlign == 'bottom' && end,
    ),
    horizontalOptions && horizontalOptions.styles && typestyle.media({ minWidth: breakpoint + 1 },
      ...horizontalOptions.styles),
  );
  return createBagTag(otherProps, klass, 'Responsive');
}
Responsive.displayName = 'Responsive';
