import * as typestyle from 'typestyle';
import * as React from 'react';
import { GLSProps, VerticalSpacingConsumer, BoxUnit, FlexProp } from '../common';
import { processGLSProps, boxUnitToString, processFlexProp } from '../internal/utils';
import { types } from 'typestyle';
import { vertical, centerJustified, endJustified, end, center } from '../styles/flex';

/**
 * Puts a vertical margin between each child
 */
export const verticallySpaced = (margin: BoxUnit) => {
  const spacing = boxUnitToString(margin);
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

export interface VerticalProps extends GLSProps, FlexProp {
  spacing?: number,

  verticalAlign?: 'top' /** default */ | 'center' | 'bottom',
  horizontalAlign?: 'left' /** default */ | 'center' | 'right',
}

/** 
 * Layout out children vertically with a margin between them
 */
export const Vertical: React.FC<VerticalProps> = (props) => {
  const {
    className,
    horizontalAlign,
    verticalAlign,
    flex,
    ...otherProps
  } = processGLSProps(props);

  return (
    <VerticalSpacingConsumer>{
      (verticalSpacing) => {
        const klass = typestyle.classes(
          className,
          typestyle.style(
            processFlexProp(props),
            vertical,
            verticallySpaced(props.spacing == null ? verticalSpacing : props.spacing),
            verticalAlign == 'center' && centerJustified,
            verticalAlign == 'bottom' && endJustified,
            horizontalAlign == 'right' && end,
            horizontalAlign == 'center' && center,
          )
        );
        return <div {...otherProps} className={klass} data-comment='Vertical' />
      }
    }</VerticalSpacingConsumer>
  );
}
Vertical.displayName = 'Vertical';
