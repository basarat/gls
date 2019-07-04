import * as typestyle from 'typestyle';
import { types, classes } from 'typestyle';
import * as React from 'react';
import { Spacing, BoxUnit } from '../common';
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

export interface GridProps extends React.HTMLProps<HTMLDivElement> {
  spacing?:
  | BoxUnit
  | [BoxUnit, BoxUnit]
}

/** 
 * Lays out children with a margin between them (horizontal and vertical)
 */
export const Grid: React.FC<GridProps> = (props) => {
  const { className, ...otherProps } = props;

  /** 
   * Figure out the spacing requested 
   */
  let horizontal!: BoxUnit;
  let vertical!: BoxUnit;
  if ('spacing' in props && props.spacing != null) {
    delete (otherProps as any).spacing;
    if (typeof props.spacing == 'number' || typeof props.spacing == 'string') {
      horizontal = props.spacing;
      vertical = horizontal;
    } else {
      [vertical, horizontal] = props.spacing;
    }
  }

  const klass = classes(
    className,
    gridSpaced(vertical, horizontal),
  );
  return (
    <div {...otherProps} className={klass} data-comment='Grid' />
  );
}
Grid.displayName = 'Grid';
