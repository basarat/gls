import * as typestyle from 'typestyle';
import * as React from 'react';
import { BaseProps, SizingProp, SpacingProp, HorizontalsAlignProps, CrossAxisAlignProp } from '../common';
import { createBaseTag, _processSizing, useGLSDefaults, _processCrossAxisAlign } from '../internal/utils';
import { horizontal, endJustified, centerJustified, center, end, start, baseline, horizontalReverse } from '../styles/flex';
import { horizontallySpaced, horizontallyReverseSpaced } from '../styles/spacing';

export interface HorizontalProps extends BaseProps, SizingProp, SpacingProp, HorizontalsAlignProps, CrossAxisAlignProp {
  reverse?: boolean
}

/** 
 * Layout out children horizontally with a margin between them
 */
export const Horizontal = React.forwardRef((props: HorizontalProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { horizontalSpacing } = useGLSDefaults();
  const {
    sizing,
    crossAxisAlign,

    spacing = horizontalSpacing,
    verticalAlign,
    horizontalAlign,
    reverse,

    ...otherProps } = props;

  const klass = typestyle.style(
    _processSizing(sizing),
    crossAxisAlign != null && _processCrossAxisAlign(crossAxisAlign),
    reverse === true ? horizontalReverse : horizontal,
    spacing !== 0 && (reverse === true ? horizontallyReverseSpaced(spacing) : horizontallySpaced(spacing)),
    horizontalAlign == 'center' && centerJustified,
    horizontalAlign == 'right' && endJustified,
    verticalAlign == 'top' && start,
    verticalAlign == 'center' && center,
    verticalAlign == 'bottom' && end,
    verticalAlign == 'baseline' && baseline,
  );
  return createBaseTag(otherProps, klass, 'Horizontal', ref);
});
Horizontal.displayName = 'Horizontal';
