import * as typestyle from 'typestyle';
import * as React from 'react';
import { BaseProps, SizingProp, VerticalsAlignProps, CrossAxisAlignProp } from '../common';
import { createBaseTag, _processSizing, _processCrossAxisAlign } from '../internal/utils';
import { content, stretch, centerJustified, endJustified, center, end, vertical, start } from '../styles/flex';

export interface Stretch extends BaseProps, VerticalsAlignProps, CrossAxisAlignProp {
  sizing?: number;
}

/** 
 * For providing a *as much as available* amount of space for an item
 */
export const Stretch = React.forwardRef((props: Stretch, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    sizing,
    crossAxisAlign,

    verticalAlign = 'top',
    horizontalAlign = 'left',

    ...otherProps
  } = props;
  const klass = typestyle.style(
    stretch(sizing),
    crossAxisAlign != null && _processCrossAxisAlign(crossAxisAlign),
    vertical,
    verticalAlign == 'center' && centerJustified,
    verticalAlign == 'bottom' && endJustified,
    horizontalAlign == 'left' && start,
    horizontalAlign == 'center' && center,
    horizontalAlign == 'right' && end,
  );
  return createBaseTag(otherProps, klass, 'Flex', ref);
});
Stretch.displayName = 'Flex';

export interface ContentProps extends BaseProps, VerticalsAlignProps, CrossAxisAlignProp {
}

/** 
 * For providing a *as much as needed* amount of space for an item
 */
export const Content = React.forwardRef((props: ContentProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    crossAxisAlign,
    verticalAlign = 'top',
    horizontalAlign = 'left',

    ...otherProps
  } = props;
  const klass = typestyle.style(
    content,
    crossAxisAlign != null && _processCrossAxisAlign(crossAxisAlign),
    vertical,
    verticalAlign == 'center' && centerJustified,
    verticalAlign == 'bottom' && endJustified,
    horizontalAlign == 'left' && start,
    horizontalAlign == 'center' && center,
    horizontalAlign == 'right' && end,
  );
  return createBaseTag(otherProps, klass, 'Content', ref);
});
Content.displayName = 'Content';

export interface BoxProps extends BaseProps, VerticalsAlignProps, SizingProp, CrossAxisAlignProp {
}

/** 
 * A general purpose single item container
 */
export const Box = React.forwardRef((props: BoxProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    sizing,
    crossAxisAlign,
    verticalAlign = 'top',
    horizontalAlign = 'left',

    ...otherProps
  } = props;
  const klass = typestyle.style(
    _processSizing(sizing),
    crossAxisAlign != null && _processCrossAxisAlign(crossAxisAlign),
    vertical,
    verticalAlign == 'center' && centerJustified,
    verticalAlign == 'bottom' && endJustified,
    horizontalAlign == 'left' && start,
    horizontalAlign == 'center' && center,
    horizontalAlign == 'right' && end,
  );
  return createBaseTag(otherProps, klass, 'Box', ref);
});
Box.displayName = 'Box';
