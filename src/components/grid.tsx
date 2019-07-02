import * as typestyle from 'typestyle';
import { types, classes } from 'typestyle';
import * as React from 'react';
import { Spacing, BoxUnit } from './common';
import { boxUnitToString } from '../internal/utils';

/**
 * Puts a (horizontal AND vertical) margin between each child
 */
export function gridSpaced(both: BoxUnit): string;
export function gridSpaced(topAndBottom: BoxUnit, leftAndRight: BoxUnit): string;
export function gridSpaced(topAndBottom: BoxUnit, leftAndRight = topAndBottom): string {
  const vertical = boxUnitToString(topAndBottom);
  const horizontal = boxUnitToString(leftAndRight);
  return typestyle.style(
    {
      marginTop: '-' + vertical,
      marginLeft: '-' + horizontal,
      '&>*': {
        marginTop: vertical,
        marginLeft: horizontal,
      }
    } as types.CSSProperties
  );
};

export interface GridUniformProps extends React.HTMLProps<HTMLDivElement> {
  spacing?: BoxUnit
}

/** 
 * Lays out children with a margin between them (horizontal and vertical)
 */
export const GridUniform: React.FC<GridUniformProps> = (props) => {
  const { className, spacing = Spacing.grid.horizontal, ...otherProps } = props;
  const klass = classes(
    className,
    gridSpaced(spacing),
  );
  return (
    <div {...otherProps} className={klass} data-comment='GridUniform' />
  );
}
GridUniform.displayName = 'GridUniform';


export interface GridAspectProps extends React.HTMLProps<HTMLDivElement> {
  vertical?: BoxUnit
  horizontal?: BoxUnit
}

/** 
 * Lays out children with a margin between them (horizontal and vertical)
 */
export const GridAspect: React.FC<GridAspectProps> = (props) => {
  const {
    className,
    vertical = Spacing.grid.vertical,
    horizontal = Spacing.grid.horizontal,
    ...otherProps
  } = props;
  const klass = classes(
    className,
    gridSpaced(vertical, horizontal),
  );
  return (
    <div {...otherProps} className={klass} data-comment='GridAspect' />
  );
}
GridAspect.displayName = 'GridAspect';
