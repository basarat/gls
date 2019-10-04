import * as typestyle from 'typestyle';
import * as React from 'react';
import { BaseProps, SizingProp, SpacingProp, AlignmentInVerticalProps, CrossAxisAlignProp } from '../common';
import { createBaseTag, _processSizing, useGLSDefaults, _processCrossAxisAlign } from '../internal/utils';
import { vertical, centerJustified, endJustified, end, center, start } from '../styles/flex';
import { verticallySpaced } from '../styles/spacing';

export interface VerticalProps extends BaseProps, SizingProp, SpacingProp, AlignmentInVerticalProps, CrossAxisAlignProp {
}

/** 
 * Layout out children vertically with a margin between them
 */
export const Vertical = React.forwardRef((props: VerticalProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { verticalSpacing } = useGLSDefaults();
  const {
    sizing,
    crossAxisAlign,

    spacing = verticalSpacing,
    verticalAlign,
    horizontalAlign,

    ...otherProps
  } = props;

  const klass = typestyle.style(
    _processSizing(sizing),
    crossAxisAlign != null && _processCrossAxisAlign(crossAxisAlign),
    vertical,
    spacing !== 0 && verticallySpaced(spacing),
    verticalAlign == 'center' && centerJustified,
    verticalAlign == 'bottom' && endJustified,
    horizontalAlign == 'left' && start,
    horizontalAlign == 'center' && center,
    horizontalAlign == 'right' && end,
  );
  return createBaseTag(otherProps, klass, 'Vertical', ref);
});
Vertical.displayName = 'Vertical';
