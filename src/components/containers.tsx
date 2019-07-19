import * as typestyle from 'typestyle';
import * as React from 'react';
import { GLSProps } from '../common';
import { createGLSTag } from '../internal/utils';
import { content, flex } from '../styles/flex';

export interface FlexProps extends GLSProps {
  sizing?: number;
}

/** 
 * For providing a *as much as available* amount of space for an item
 */
export const Flex: React.FC<FlexProps> = (props) => {
  const klass = typestyle.style(flex(props.sizing));
  return createGLSTag(props, klass, 'Flex');
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
