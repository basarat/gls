import * as typestyle from 'typestyle';
import * as React from 'react';
import { BaseProps, SizingProp, SpacingProp, AlignmentInHorizontalProps } from '../common';
import { createBaseTag, _processSizing, useGLSDefaults } from '../internal/utils';
import { horizontal, endJustified, centerJustified, center, end, start } from '../styles/flex';
import { horizontallySpaced } from '../styles/spacing';

export interface HorizontalProps extends BaseProps, SizingProp, SpacingProp, AlignmentInHorizontalProps {
}

/** 
 * Layout out children horizontally with a margin between them
 */
export const Horizontal = React.forwardRef((props: HorizontalProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { horizontalSpacing } = useGLSDefaults();
  const {
    sizing,

    spacing = horizontalSpacing,
    verticalAlign,
    horizontalAlign,

    ...otherProps } = props;

  const klass = typestyle.style(
    _processSizing(sizing),
    horizontal,
    spacing !== 0 && horizontallySpaced(spacing),
    horizontalAlign == 'center' && centerJustified,
    horizontalAlign == 'right' && endJustified,
    verticalAlign == 'top' && start,
    verticalAlign == 'center' && center,
    verticalAlign == 'bottom' && end,
  );
  return createBaseTag(otherProps, klass, 'Horizontal', ref);
});
Horizontal.displayName = 'Horizontal';
