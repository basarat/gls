import * as typestyle from 'typestyle';
import * as React from 'react';
import { GLSProps, FlexProp, BoxUnit } from '../common';
import { processGLSProps, processFlexProp, boxUnitToString, useGLSDefaults } from '../internal/utils';
import { horizontal, endJustified, centerJustified, center, end } from '../styles/flex';
import { types } from 'typestyle';

/**
 * Puts a horizontal margin between each child
 */
export const horizontallySpaced = (margin: BoxUnit) => {
  const spacing = boxUnitToString(margin);
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

export interface HorizontalProps extends GLSProps, FlexProp {
  spacing?: number,

  horizontalAlign?: 'left' /** default */ | 'center' | 'right',
  verticalAlign?: 'top' /** default */ | 'center' | 'bottom',
}

/** 
 * Layout out children horizontally with a margin between them
 */
export const Horizontal: React.FC<HorizontalProps> = (props) => {
  const {
    className,
    horizontalAlign,
    verticalAlign,
    flex,
    ...otherProps } = processGLSProps(props);

  const { horizontalSpacing } = useGLSDefaults();

  const klass =
    typestyle.classes(
      className,
      typestyle.style(
        processFlexProp(props),
        horizontal,
        horizontallySpaced(props.spacing == null ? horizontalSpacing : props.spacing),
        horizontalAlign == 'right' && endJustified,
        horizontalAlign == 'center' && centerJustified,
        verticalAlign == 'center' && center,
        verticalAlign == 'bottom' && end,
      )
    );
  return <div {...otherProps} className={klass} data-comment='Horizontal' />;
}
Horizontal.displayName = 'Horizontal';