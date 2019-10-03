import * as typestyle from 'typestyle';
import * as React from 'react';
import { BaseProps, SizingProp, AlignmentInVerticalProps } from '../common';
import { createBaseTag, _processSizing } from '../internal/utils';
import { content, flex, centerJustified, endJustified, center, end, vertical, start, startJustified, crossAxisStretchStyle } from '../styles/flex';

export interface FlexProps extends BaseProps, AlignmentInVerticalProps {
  sizing?: number;
  crossAxisStretch?: boolean;
}

/** 
 * For providing a *as much as available* amount of space for an item
 */
export const Flex = React.forwardRef((props: FlexProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    sizing,
    crossAxisStretch,

    verticalAlign = 'top',
    horizontalAlign = 'left',

    ...otherProps
  } = props;
  const klass = typestyle.style(
    flex(sizing),
    crossAxisStretch && crossAxisStretchStyle,
    vertical,
    verticalAlign == 'center' && centerJustified,
    verticalAlign == 'bottom' && endJustified,
    horizontalAlign == 'left' && start,
    horizontalAlign == 'center' && center,
    horizontalAlign == 'right' && end,
  );
  return createBaseTag(otherProps, klass, 'Flex', ref);
});
Flex.displayName = 'Flex';

export interface ContentProps extends BaseProps, AlignmentInVerticalProps {
  crossAxisStretch?: boolean;
}

/** 
 * For providing a *as much as needed* amount of space for an item
 */
export const Content = React.forwardRef((props: ContentProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    crossAxisStretch,
    verticalAlign = 'top',
    horizontalAlign = 'left',

    ...otherProps
  } = props;
  const klass = typestyle.style(
    content,
    crossAxisStretch && crossAxisStretchStyle,
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

export interface BoxProps extends BaseProps, AlignmentInVerticalProps, SizingProp {
}

/** 
 * A general purpose single item container
 */
export const Box = React.forwardRef((props: BoxProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    sizing,
    crossAxisStretch,
    verticalAlign = 'top',
    horizontalAlign = 'left',

    ...otherProps
  } = props;
  const klass = typestyle.style(
    _processSizing(sizing, crossAxisStretch),
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
