import * as typestyle from 'typestyle';
import { types, classes } from 'typestyle';
import * as React from 'react';
import * as csstips from 'csstips';
import { Spacing } from './common';

///////////////////////////////////
// GRID 
///////////////////////////////////

export interface GridProps extends React.HTMLProps<HTMLDivElement> {
  spacing?: number
}

/** 
 * Lays out children with a margin between them (horizontal and vertical)
 */
export const Grid: React.FC<GridProps> = (props) => {
  const { className, ...otherProps } = props;
  const klass = classes(
    className,
    typestyle.style(csstips.gridSpaced(
      props.spacing == null ? Spacing.grid.vertical : props.spacing
    )),
  );
  return (
    <div {...otherProps} className={klass} data-comment='Grid' />
  );
}
Grid.displayName = 'Grid';
