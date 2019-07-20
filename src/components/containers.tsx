import * as typestyle from 'typestyle';
import * as React from 'react';
import { GLSProps, AlignmentProps } from '../common';
import { createGLSTag } from '../internal/utils';
import { content, flex, vertical, centerJustified, endJustified, center, end } from '../styles/flex';

export interface FlexProps extends GLSProps, AlignmentProps {
  sizing?: number;
}

/** 
 * For providing a *as much as available* amount of space for an item
 */
export const Flex: React.FC<FlexProps> = (props) => {
  const {
    sizing,

    verticalAlign,
    horizontalAlign,

    ...otherProps
  } = props;
  const klass = typestyle.style(
    flex(sizing),
    vertical,
    verticalAlign == 'center' && centerJustified,
    verticalAlign == 'bottom' && endJustified,
    horizontalAlign == 'center' && center,
    horizontalAlign == 'right' && end,
  );
  return createGLSTag(otherProps, klass, 'Flex');
};
Flex.displayName = 'Flex';

/** 
 * For providing a *as much as needed* amount of space for an item
 */
export const Content: React.FC<GLSProps> = (props) => {
  const klass = typestyle.style(content);
  return createGLSTag(props, klass, 'Content');
};
Content.displayName = 'Content';
