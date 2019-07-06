import * as typestyle from 'typestyle';
import * as React from 'react';
import { GLSProps, VerticalSpacingConsumer, BoxUnit } from '../common';
import { processGLSProps, boxUnitToString } from '../internal/utils';
import { types } from 'typestyle';
import { content, vertical, centerJustified, endJustified, end, center } from '../styles/flex';

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

export interface VerticalProps extends GLSProps {
  flex?:
  | 'content' /** default */
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12,
  spacing?: number,

  verticalAlign?: 'top' /** default */ | 'center' | 'bottom',
  horizontalAlign?: 'left' /** default */ | 'center' | 'right',
}

/** 
 * Layout out children with a vertical margin between them
 */
export const Vertical: React.FC<VerticalProps> = (props) => {
  const {
    className,
    horizontalAlign,
    verticalAlign,
    ...otherProps
  } = processGLSProps(props);

  return (
    <VerticalSpacingConsumer>{
      (verticalSpacing) => {
        const klass = typestyle.classes(
          className,
          typestyle.style(
            content,
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
