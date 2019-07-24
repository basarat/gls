import * as typestyle from 'typestyle';
import { SizingProp, StylesProp, SpacingProp, AlignmentInVerticalProps, AlignmentInHorizontalProps, PaddingProp, SizeProps, ScrollProp, StyleProp, ClassNameProp, TagProps } from '../common';
import { createBaseTag, useGLSDefaults, _processSizingProp, _processPadding, cssLengthToString } from '../internal/utils';
import { vertical, horizontal, centerJustified, endJustified, end, center, start } from '../styles/flex';
import { verticallySpaced, horizontallySpaced } from '../styles/spacing';

/** 
 * Props that can be specified at root of `Responsive` and overridden for `vertical`/`horizontal` options
 */
export interface ResponsiveOverridableProps extends
  SizingProp,
  SpacingProp,
  PaddingProp,
  SizeProps,
  ScrollProp {
}

export interface BreakpointProp {
  /** 
   * windowWidth <= breakpoint : it is vertical (mobile)
   * else                      : it is horizontal (desktop)
   **/
  breakpoint?: number;
}

export interface ResponsiveModesProps {
  /** Vertical mode configuration */
  vertical?: ResponsiveVerticalModeProps;

  /** Horizontal mode configuration */
  horizontal?: ResponsiveHorizontalModeProps;
}

/** 
 * Props that can only be specified at the root of the `Responsive` 
 */
export interface ResponsiveNonOverridableProps extends
  StylesProp,
  StyleProp,
  ClassNameProp,
  TagProps,
  BreakpointProp,
  ResponsiveModesProps {
}

/** 
 * Props for Vertical mode
 */
export interface ResponsiveVerticalModeProps extends
  AlignmentInVerticalProps,
  StylesProp,
  ResponsiveOverridableProps {
}

/** 
 * Props for Horizontal mode
 */
export interface ResponsiveHorizontalModeProps extends
  AlignmentInHorizontalProps,
  StylesProp,
  ResponsiveOverridableProps {
}

/** 
 * Props for the Responsive component
 */
export interface ResponsiveProps extends
  ResponsiveOverridableProps,
  ResponsiveNonOverridableProps {
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
    padding,
    height,
    minHeight,
    maxHeight,
    width,
    minWidth,
    maxWidth,
    scroll,

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

  /** Determine paddings */
  const verticalPadding = (verticalOptions && verticalOptions.padding != null) ? verticalOptions.padding
    : padding;
  const horizontalPadding = (horizontalOptions && horizontalOptions.padding != null) ? horizontalOptions.padding
    : padding;

  /** Determine size */
  const verticalHeight = (verticalOptions && verticalOptions.height != null) ? verticalOptions.height
    : height;
  const horizontalHeight = (horizontalOptions && horizontalOptions.height != null) ? horizontalOptions.height
    : height;
  const verticalMinHeight = (verticalOptions && verticalOptions.minHeight != null) ? verticalOptions.minHeight
    : minHeight;
  const horizontalMinHeight = (horizontalOptions && horizontalOptions.minHeight != null) ? horizontalOptions.minHeight
    : minHeight;
  const verticalMaxHeight = (verticalOptions && verticalOptions.maxHeight != null) ? verticalOptions.maxHeight
    : maxHeight;
  const horizontalMaxHeight = (horizontalOptions && horizontalOptions.maxHeight != null) ? horizontalOptions.maxHeight
    : maxHeight;
  const verticalWidth = (verticalOptions && verticalOptions.width != null) ? verticalOptions.width
    : width;
  const horizontalWidth = (horizontalOptions && horizontalOptions.width != null) ? horizontalOptions.width
    : width;
  const verticalMinWidth = (verticalOptions && verticalOptions.minWidth != null) ? verticalOptions.minWidth
    : minWidth;
  const horizontalMinWidth = (horizontalOptions && horizontalOptions.minWidth != null) ? horizontalOptions.minWidth
    : minWidth;
  const verticalMaxWidth = (verticalOptions && verticalOptions.maxWidth != null) ? verticalOptions.maxWidth
    : maxWidth;
  const horizontalMaxWidth = (horizontalOptions && horizontalOptions.maxWidth != null) ? horizontalOptions.maxWidth
    : maxWidth;


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
      _processSizingProp({ sizing: verticalSizing }),
      verticalPadding != null && _processPadding(verticalPadding),
      vertical,
      verticalSpacing !== 0 && verticallySpaced(verticalSpacing),
      verticalModeVerticalAlign == 'center' && centerJustified,
      verticalModeVerticalAlign == 'bottom' && endJustified,
      verticalModeHorizontalAlign == 'left' && start,
      verticalModeHorizontalAlign == 'right' && end,
      verticalModeHorizontalAlign == 'center' && center,
      verticalHeight != null && { height: cssLengthToString(verticalHeight) },
      verticalMinHeight != null && { minHeight: cssLengthToString(verticalMinHeight) },
      verticalMaxHeight != null && { maxHeight: cssLengthToString(verticalMaxHeight) },
      verticalWidth != null && { width: cssLengthToString(verticalWidth) },
      verticalMinWidth != null && { minWidth: cssLengthToString(verticalMinWidth) },
      verticalMaxWidth != null && { maxWidth: cssLengthToString(verticalMaxWidth) },
    ),
    verticalOptions && verticalOptions.styles && typestyle.media({ minWidth: 0, maxWidth: breakpoint },
      ...verticalOptions.styles),

    /** Bigger than breakpoint: Horizontal */
    typestyle.media({ minWidth: breakpoint + 1 },
      _processSizingProp({ sizing: horizontalSizing }),
      horizontalPadding != null && _processPadding(horizontalPadding),
      horizontal,
      horizontalSpacing !== 0 && horizontallySpaced(horizontalSpacing),
      horizontalModeHorizontalAlign == 'right' && endJustified,
      horizontalModeHorizontalAlign == 'center' && centerJustified,
      horizontalModeVerticalAlign == 'top' && start,
      horizontalModeVerticalAlign == 'center' && center,
      horizontalModeVerticalAlign == 'bottom' && end,
      horizontalHeight != null && { height: cssLengthToString(horizontalHeight) },
      horizontalMinHeight != null && { minHeight: cssLengthToString(horizontalMinHeight) },
      horizontalMaxHeight != null && { maxHeight: cssLengthToString(horizontalMaxHeight) },
      horizontalWidth != null && { width: cssLengthToString(horizontalWidth) },
      horizontalMinWidth != null && { minWidth: cssLengthToString(horizontalMinWidth) },
      horizontalMaxWidth != null && { maxWidth: cssLengthToString(horizontalMaxWidth) },
    ),
    horizontalOptions && horizontalOptions.styles && typestyle.media({ minWidth: breakpoint + 1 },
      ...horizontalOptions.styles),
  );
  return createBaseTag(otherProps, klass, 'Responsive');
}
Responsive.displayName = 'Responsive';
