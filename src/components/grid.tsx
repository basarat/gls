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

export type GridProps = React.HTMLProps<HTMLDivElement> & (
  | {
    spacing?: BoxUnit
  }
  | {
    verticalSpacing: BoxUnit
    horizontalSpacing: BoxUnit
  }
)

/** 
 * Lays out children with a margin between them (horizontal and vertical)
 */
export const Grid: React.FC<GridProps> = (props) => {
  const { className, ...otherProps } = props;

  /** 
   * Figure out the spacing requested 
   */
  let vertical!: BoxUnit;
  let horizontal!: BoxUnit;
  if ('spacing' in props) {
    delete (otherProps as any).spacing;
    horizontal = props.spacing != null ? props.spacing : Spacing.grid.horizontal;
    vertical = horizontal;
  } else if ('verticalSpacing' in props) {
    delete (otherProps as any).verticalSpacing;
    delete (otherProps as any).horizontalSpacing;
    horizontal = props.horizontalSpacing != null ? props.horizontalSpacing : Spacing.grid.horizontal;
    vertical = props.verticalSpacing != null ? props.verticalSpacing : Spacing.grid.vertical;
  }

  const klass = classes(
    className,
    gridSpaced(vertical,horizontal),
  );
  return (
    <div {...otherProps} className={klass} data-comment='Grid' />
  );
}
Grid.displayName = 'Grid';
