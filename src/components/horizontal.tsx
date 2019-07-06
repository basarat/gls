import * as typestyle from 'typestyle';
import * as React from 'react';
import * as csstips from 'csstips';
import { GLSProps, HorizontalSpacingConsumer } from '../common';
import { processGLSProps } from '../internal/utils';

///////////////////////////////////
// Horizontal
///////////////////////////////////

export interface HorizontalProps extends GLSProps {
  spacing?: number,

  horizontalAlign?: 'left' /** default */ | 'center' | 'right',
  verticalAlign?: 'top' /** default */ | 'center' | 'bottom',
}

export const Horizontal: React.FC<HorizontalProps> = (props) => {
  const {
    className,
    horizontalAlign,
    verticalAlign,
    ...otherProps } = processGLSProps(props);

  return (
    <HorizontalSpacingConsumer>{
      (horizontal) => {
        const klass =
          typestyle.classes(
            className,
            typestyle.style(
              csstips.content,
              csstips.horizontal,
              csstips.horizontallySpaced(props.spacing == null ? horizontal : props.spacing),
              horizontalAlign == 'right' && csstips.endJustified,
              horizontalAlign == 'center' && csstips.centerJustified,
              verticalAlign == 'center' && csstips.center,
              verticalAlign == 'bottom' && csstips.end,
            )
          );
        return <div {...otherProps} className={klass} data-comment='Horizontal' />
      }
    }</HorizontalSpacingConsumer>
  );
}
Horizontal.displayName = 'Horizontal';