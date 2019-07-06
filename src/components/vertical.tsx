import * as typestyle from 'typestyle';
import * as React from 'react';
import * as csstips from 'csstips';
import { GLSProps, VerticalSpacingConsumer } from '../common';
import { processGLSProps } from '../internal/utils';

///////////////////////////////////
// Vertical 
///////////////////////////////////

export interface VerticalProps extends GLSProps {
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
      (vertical) => {
        const klass = typestyle.classes(
          className,
          typestyle.style(
            csstips.content,
            csstips.vertical,
            csstips.verticallySpaced(props.spacing == null ? vertical : props.spacing),
            verticalAlign == 'center' && csstips.centerJustified,
            verticalAlign == 'bottom' && csstips.endJustified,
            horizontalAlign == 'right' && csstips.end,
            horizontalAlign == 'center' && csstips.center,
          )
        );
        return <div {...otherProps} className={klass} data-comment='Vertical' />
      }
    }</VerticalSpacingConsumer>
  );
}
Vertical.displayName = 'Vertical';
