import * as typestyle from 'typestyle';
import * as React from 'react';
import * as csstips from 'csstips';
import { Spacing } from './common';

///////////////////////////////////
// Horizontal
///////////////////////////////////

export interface HorizontalProps extends React.HTMLProps<HTMLDivElement> {
  spacing?: number,

  horizontalAlign?: 'left' /** default */ | 'right' | 'center',
  verticalAlign?: 'top' /** default */ | 'center' | 'bottom',
}

export const Horizontal: React.FC<HorizontalProps> = (props) => {
  const {
    className,
    horizontalAlign,
    verticalAlign,
    ...otherProps } = props;

  const klass =
    typestyle.classes(
      className,
      typestyle.style(
        csstips.content,
        csstips.horizontal,
        csstips.horizontallySpaced(props.spacing == null ? Spacing.horizontal : props.spacing),
        horizontalAlign == 'right' && csstips.endJustified,
        horizontalAlign == 'center' && csstips.centerJustified,
        verticalAlign == 'center' && csstips.center,
        verticalAlign == 'bottom' && csstips.end,
      )
    );

  return (
    <div {...otherProps} className={klass} data-comment='Horizontal' />
  );
}
Horizontal.displayName = 'Horizontal';