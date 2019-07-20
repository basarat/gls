import * as typestyle from 'typestyle';
import * as React from 'react';
import { GLSProps, SizingProp, ChildPlacementProps } from '../common';
import { createGLSTag, processSizingProp, useGLSDefaults } from '../internal/utils';
import { vertical, centerJustified, endJustified, end, center } from '../styles/flex';
import { verticallySpaced } from '../styles/spacing';

export interface VerticalProps extends GLSProps, SizingProp, ChildPlacementProps {
}

/** 
 * Layout out children vertically with a margin between them
 */
export const Vertical: React.FC<VerticalProps> = (props) => {
  const { verticalSpacing } = useGLSDefaults();
  const {
    sizing,

    spacing = verticalSpacing,
    horizontalAlign,
    verticalAlign,

    ...otherProps
  } = props;

  const klass = typestyle.style(
    processSizingProp(props),
    vertical,
    verticalSpacing !== 0 && verticallySpaced(spacing),
    verticalAlign == 'center' && centerJustified,
    verticalAlign == 'bottom' && endJustified,
    horizontalAlign == 'center' && center,
    horizontalAlign == 'right' && end,
  );
  return createGLSTag(otherProps, klass, 'Vertical');
}
Vertical.displayName = 'Vertical';
