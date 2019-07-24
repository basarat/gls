import * as typestyle from 'typestyle';
import * as React from 'react';
import { BaseProps, SizingProp, SpacingProp, AlignmentInVerticalProps } from '../common';
import { createBagTag, processSizingProp, useGLSDefaults } from '../internal/utils';
import { vertical, centerJustified, endJustified, end, center, start } from '../styles/flex';
import { verticallySpaced } from '../styles/spacing';

export interface VerticalProps extends BaseProps, SizingProp, SpacingProp, AlignmentInVerticalProps {
}

/** 
 * Layout out children vertically with a margin between them
 */
export const Vertical: React.FC<VerticalProps> = (props) => {
  const { verticalSpacing } = useGLSDefaults();
  const {
    sizing,

    spacing = verticalSpacing,
    verticalAlign,
    horizontalAlign,

    ...otherProps
  } = props;

  const klass = typestyle.style(
    processSizingProp(props),
    vertical,
    spacing !== 0 && verticallySpaced(spacing),
    verticalAlign == 'center' && centerJustified,
    verticalAlign == 'bottom' && endJustified,
    horizontalAlign == 'left' && start,
    horizontalAlign == 'center' && center,
    horizontalAlign == 'right' && end,
  );
  return createBagTag(otherProps, klass, 'Vertical');
}
Vertical.displayName = 'Vertical';
