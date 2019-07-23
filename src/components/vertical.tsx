import * as typestyle from 'typestyle';
import * as React from 'react';
import { BaseProps, SizingProp, SpacingProp } from '../common';
import { createBagTag, processSizingProp, useGLSDefaults } from '../internal/utils';
import { vertical, centerJustified, endJustified, end, center, start } from '../styles/flex';
import { verticallySpaced } from '../styles/spacing';

export interface VerticalProps extends BaseProps, SizingProp, SpacingProp {
  /** Child alignment in vertical axis */
  verticalAlign?: 'top' /** default */ | 'center' | 'bottom',
  /** Child alignment in horizontal axis */
  horizontalAlign?: 'stretch' /** default */ | 'left' | 'center' | 'right',
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
