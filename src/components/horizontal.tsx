import * as typestyle from 'typestyle';
import * as React from 'react';
import { GLSProps, SizingProp, CSSLength, ChildPlacementProps } from '../common';
import { createGLSTag, processSizingProp, cssLengthToString, useGLSDefaults } from '../internal/utils';
import { horizontal, endJustified, centerJustified, center, end } from '../styles/flex';
import { types } from 'typestyle';

/**
 * Puts a horizontal margin between each child
 */
export const horizontallySpaced = (margin: CSSLength) => {
  const spacing = cssLengthToString(margin);
  return (
    {
      '&>*': {
        marginRight: spacing + ' !important'
      },
      '&>*:last-child': {
        marginRight: '0px !important',
      }
    } as types.CSSProperties
  );
};

export interface HorizontalProps extends GLSProps, SizingProp, ChildPlacementProps {
}

/** 
 * Layout out children horizontally with a margin between them
 */
export const Horizontal: React.FC<HorizontalProps> = (props) => {
  const { horizontalSpacing } = useGLSDefaults();
  const {
    spacing = horizontalSpacing,
    horizontalAlign,
    verticalAlign,
    sizing,
    ...otherProps } = props;

  const klass = typestyle.style(
    processSizingProp(props),
    horizontal,
    horizontallySpaced(horizontalSpacing),
    horizontalAlign == 'right' && endJustified,
    horizontalAlign == 'center' && centerJustified,
    verticalAlign == 'center' && center,
    verticalAlign == 'bottom' && end,
  );
  return createGLSTag(otherProps, klass, 'Horizontal');
}
Horizontal.displayName = 'Horizontal';
