import * as typestyle from 'typestyle';
import { classes } from 'typestyle';
import * as React from 'react';
import { BoxUnit, GLSProps, VerticalSpacingConsumer, HorizontalSpacingConsumer } from '../common';
import { boxUnitToString, processGLSProps } from '../internal/utils';

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
      $nest: {
        '&>*': {
          marginTop: vertical,
          marginLeft: horizontal,
        }
      }
    }
  );
};

export interface GridProps extends GLSProps {
  spacing?:
  | BoxUnit
  | [BoxUnit, BoxUnit]
}

/** 
 * Lays out children with a margin between them (horizontal and vertical)
 */
export const Grid: React.FC<GridProps> = (props) => {
  const { className, ...otherProps } = processGLSProps(props);

  /** 
   * Figure out the spacing requested 
   */
  let horizontal!: BoxUnit;
  let vertical!: BoxUnit;
  if (props.spacing != null) {
    delete (otherProps as any).spacing;
    if (typeof props.spacing == 'number' || typeof props.spacing == 'string') {
      horizontal = props.spacing;
      vertical = horizontal;
    } else {
      [vertical, horizontal] = props.spacing;
    }
    const klass = classes(
      className,
      gridSpaced(vertical, horizontal),
    );
    return (
      <div {...otherProps} className={klass} data-comment='Grid' />
    );
  } else {
    return (<VerticalSpacingConsumer>{
      (vertical) => {
        return (
          <HorizontalSpacingConsumer>
            {(horizontal) => {
              const klass = classes(
                className,
                gridSpaced(vertical, horizontal),
              );
              return (
                <div {...otherProps} className={klass} data-comment='Grid' />
              );
            }}
          </HorizontalSpacingConsumer>
        )
      }
    }</VerticalSpacingConsumer>);
  }
}
Grid.displayName = 'Grid';
