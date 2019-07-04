import * as typestyle from 'typestyle';
import * as React from 'react';
import * as csstips from 'csstips';
import { Spacing, GLSProps } from '../common';
import { processGLSProps } from '../internal/utils';

///////////////////////////////////
// Vertical 
///////////////////////////////////

export interface VerticalProps extends GLSProps {
  spacing?: number,

  verticalAlign?: 'top' /** default */ | 'center' | 'bottom',
  horizontalAlign?: 'left' /** default */ | 'right' | 'center',
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

  const klass = typestyle.classes(
    className,
    typestyle.style(
      csstips.content,
      csstips.vertical,
      csstips.verticallySpaced(props.spacing == null ? Spacing.vertical : props.spacing),
      verticalAlign == 'center' && csstips.centerJustified,
      verticalAlign == 'bottom' && csstips.endJustified,
      horizontalAlign == 'right' && csstips.end,
      horizontalAlign == 'center' && csstips.center,
    )
  );

  return (
    <div {...otherProps} className={klass} data-comment='Vertical' />
  );
}
Vertical.displayName = 'Vertical';
