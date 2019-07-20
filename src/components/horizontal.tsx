import * as typestyle from 'typestyle';
import * as React from 'react';
import { GLSProps, SizingProp, SpacingProp } from '../common';
import { createGLSTag, processSizingProp, useGLSDefaults } from '../internal/utils';
import { horizontal, endJustified, centerJustified, center, end, start } from '../styles/flex';
import { horizontallySpaced } from '../styles/spacing';

export interface HorizontalProps extends GLSProps, SizingProp, SpacingProp {
  /** Child alignment in vertical axis */
  verticalAlign?: 'stretch' /** default */ | 'top' | 'center' | 'bottom',
  /** Child alignment in horizontal axis */
  horizontalAlign?: 'left' /** default */ | 'center' | 'right',
}

/** 
 * Layout out children horizontally with a margin between them
 */
export const Horizontal: React.FC<HorizontalProps> = (props) => {
  const { horizontalSpacing } = useGLSDefaults();
  const {
    sizing,

    spacing = horizontalSpacing,
    verticalAlign,
    horizontalAlign,

    ...otherProps } = props;

  const klass = typestyle.style(
    processSizingProp(props),
    horizontal,
    horizontalSpacing !== 0 && horizontallySpaced(spacing),
    horizontalAlign == 'center' && centerJustified,
    horizontalAlign == 'right' && endJustified,
    verticalAlign == 'top' && start,
    verticalAlign == 'center' && center,
    verticalAlign == 'bottom' && end,
  );
  return createGLSTag(otherProps, klass, 'Horizontal');
}
Horizontal.displayName = 'Horizontal';
