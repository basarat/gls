import * as typestyle from 'typestyle';
import * as React from 'react';
import { BaseProps, AlignmentProps, SizingProp } from '../common';
import { createBaseTag, _processSizing } from '../internal/utils';
import { content, flex, centerJustified, endJustified, center, end, vertical, start, startJustified } from '../styles/flex';

export interface FlexProps extends BaseProps, AlignmentProps {
  sizing?: number;
}

/** 
 * For providing a *as much as available* amount of space for an item
 */
export const Flex: React.FC<FlexProps> = (props) => {
  const {
    sizing,

    verticalAlign = 'top',
    horizontalAlign = 'left',

    ...otherProps
  } = props;
  const klass = typestyle.style(
    flex(sizing),
    vertical,
    verticalAlign == 'top' && startJustified,
    verticalAlign == 'center' && centerJustified,
    verticalAlign == 'bottom' && endJustified,
    horizontalAlign == 'left' && start,
    horizontalAlign == 'center' && center,
    horizontalAlign == 'right' && end,
  );
  return createBaseTag(otherProps, klass, 'Flex');
};
Flex.displayName = 'Flex';

export interface ContentProps extends BaseProps, AlignmentProps {
}

/** 
 * For providing a *as much as needed* amount of space for an item
 */
export const Content: React.FC<ContentProps> = (props) => {
  const {
    verticalAlign = 'top',
    horizontalAlign = 'left',

    ...otherProps
  } = props;
  const klass = typestyle.style(
    content,
    vertical,
    verticalAlign == 'top' && startJustified,
    verticalAlign == 'center' && centerJustified,
    verticalAlign == 'bottom' && endJustified,
    horizontalAlign == 'left' && start,
    horizontalAlign == 'center' && center,
    horizontalAlign == 'right' && end,
  );
  return createBaseTag(otherProps, klass, 'Content');
};
Content.displayName = 'Content';

export interface BoxProps extends BaseProps, AlignmentProps, SizingProp {
}

/** 
 * A general purpose single item container
 */
export const Box: React.FC<BoxProps> = (props) => {
  const {
    sizing,
    verticalAlign = 'top',
    horizontalAlign = 'left',
    
    ...otherProps
  } = props;
  const klass = typestyle.style(
    _processSizing(sizing),
    vertical,
    verticalAlign == 'top' && startJustified,
    verticalAlign == 'center' && centerJustified,
    verticalAlign == 'bottom' && endJustified,
    horizontalAlign == 'left' && start,
    horizontalAlign == 'center' && center,
    horizontalAlign == 'right' && end,
  );
  return createBaseTag(otherProps, klass, 'Box');
};
Box.displayName = 'Box';
