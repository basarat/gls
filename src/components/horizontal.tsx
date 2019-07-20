import * as typestyle from 'typestyle';
import * as React from 'react';
import { GLSProps, SizingProp, ChildPlacementProps } from '../common';
import { createGLSTag, processSizingProp, useGLSDefaults } from '../internal/utils';
import { horizontal, endJustified, centerJustified, center, end } from '../styles/flex';
import { horizontallySpaced } from '../styles/spacing';

export interface HorizontalProps extends GLSProps, SizingProp, ChildPlacementProps {
}

/** 
 * Layout out children horizontally with a margin between them
 */
export const Horizontal: React.FC<HorizontalProps> = (props) => {
  const { horizontalSpacing } = useGLSDefaults();
  const {
    sizing,

    spacing = horizontalSpacing,
    horizontalAlign,
    verticalAlign,
    
    ...otherProps } = props;

  const klass = typestyle.style(
    processSizingProp(props),
    horizontal,
    horizontalSpacing !== 0 && horizontallySpaced(horizontalSpacing),
    horizontalAlign == 'center' && centerJustified,
    horizontalAlign == 'right' && endJustified,
    verticalAlign == 'center' && center,
    verticalAlign == 'bottom' && end,
  );
  return createGLSTag(otherProps, klass, 'Horizontal');
}
Horizontal.displayName = 'Horizontal';
