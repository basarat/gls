import * as typestyle from 'typestyle';
import * as React from 'react';
import { GLSProps, CSSLength, SizingProp, ChildPlacementProps } from '../common';
import { createGLSTag, cssLengthToString, processFlexProp, useGLSDefaults } from '../internal/utils';
import { types } from 'typestyle';
import { vertical, centerJustified, endJustified, end, center } from '../styles/flex';

/**
 * Puts a vertical margin between each child
 */
export const verticallySpaced = (margin: CSSLength) => {
  const spacing = cssLengthToString(margin);
  return (
    {
      '&>*': {
        marginBottom: spacing + ' !important'
      },
      '&>*:last-child': {
        marginBottom: '0px !important',
      }
    } as types.CSSProperties
  );
};

export interface VerticalProps extends GLSProps, SizingProp, ChildPlacementProps {
}

/** 
 * Layout out children vertically with a margin between them
 */
export const Vertical: React.FC<VerticalProps> = (props) => {
  const {
    horizontalAlign,
    verticalAlign,
    sizing: flex,
    ...otherProps
  } = props;

  const { verticalSpacing } = useGLSDefaults();

  const klass = typestyle.style(
    processFlexProp(props),
    vertical,
    verticallySpaced(props.spacing == null ? verticalSpacing : props.spacing),
    verticalAlign == 'center' && centerJustified,
    verticalAlign == 'bottom' && endJustified,
    horizontalAlign == 'right' && end,
    horizontalAlign == 'center' && center,
  );
  return createGLSTag(otherProps, klass, 'Vertical');
}
Vertical.displayName = 'Vertical';
