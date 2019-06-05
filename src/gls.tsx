/**
 * This is a level above csstips
 *  - It wraps up the csstips primitives into React components
 */
import * as typestyle from 'typestyle';
import { types, classes } from 'typestyle';
import * as React from 'react';
import * as csstips from 'csstips';


///////////////////////////////////
// Defaults 
///////////////////////////////////

/** 
 * The default spacing used by the layout components 
 * You can customize it e.g. 
 * ```ts
 * import { Spacing } from 'gls';
 * Spacing.vertical = 30;
 * ```
 */
export const Spacing = {
  vertical: 24,
  horizontal: 24,
  grid: 24,
}

///////////////////////////////////
// GRID 
///////////////////////////////////

export interface GridProps extends React.HTMLProps<HTMLDivElement> {
  spacing?: number
}

/** 
 * Lays out children with a margin between them (horizontal and vertical)
 */
export const Grid: React.SFC<GridProps> = (props) => {
  const { className, ...otherProps } = props;
  const klass = classes(
    className,
    typestyle.style(csstips.gridSpaced(props.spacing == null ? Spacing.grid : props.spacing)),
  );
  return (
    <div {...otherProps} className={klass} data-comment='Grid' />
  );
}
Grid.displayName = 'Grid';

///////////////////////////////////
// Vertical 
///////////////////////////////////

export interface VerticalProps extends React.HTMLProps<HTMLDivElement> {
  spacing?: number
}

/** 
 * Layout out children with a vertical margin between them
 */
export const Vertical: React.SFC<VerticalProps> = (props) => {
  const { className, ...otherProps } = props;

  const klass = typestyle.classes(
    className,
    typestyle.style(
      csstips.content,
      csstips.vertical,
      csstips.verticallySpaced(props.spacing == null ? Spacing.vertical : props.spacing)
    )
  );

  return (
    <div {...otherProps} className={klass} data-comment='Vertical' />
  );
}
Vertical.displayName = 'Vertical';

///////////////////////////////////
// Horizontal
///////////////////////////////////

export interface HorizontalProps extends React.HTMLProps<HTMLDivElement> {
  spacing?: number,

  horizontalAlign?: 'left' /** default */ | 'right' | 'center',
  verticalAlign?: 'top' /** default */ | 'center' | 'bottom',
}

export const Horizontal: React.SFC<HorizontalProps> = (props) => {
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

///////////////////////////////////
// General 
// Spacers / Containers
///////////////////////////////////

export const Flex: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { className, ...otherProps } = props;
  const klass = classes(
    className,
    typestyle.style(csstips.flex)
  );
  return (
    <div {...otherProps} className={klass} data-comment='Flex' />
  );
};
Flex.displayName = 'Flex';

/** TODO: VerticalSpace , HorizontalSpace */
/** Demos for all */
