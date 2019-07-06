import * as typestyle from 'typestyle';
import * as React from 'react';
import { GLSProps, FlexGrow } from '../common';
import { processGLSProps } from '../internal/utils';
import { content, flex } from '../styles/flex';

export interface FlexProps extends GLSProps {
  flex?: FlexGrow;
}

/** 
 * For providing a *as much as available* amount of space for an item
 */
export const Flex: React.FC<FlexProps> = (props) => {
  const { className, ...otherProps } = processGLSProps(props);
  const klass = typestyle.classes(
    className,
    typestyle.style(flex(props.flex))
  );
  return (
    <div {...otherProps} className={klass} data-comment='Flex' />
  );
};
Flex.displayName = 'Flex';

/** 
 * For providing a *as much as needed* amount of space for an item
 */
export const Content: React.FC<GLSProps> = (props) => {
  const { className, ...otherProps } = processGLSProps(props);
  const klass = typestyle.classes(
    className,
    typestyle.style(content)
  );
  return (
    <div {...otherProps} className={klass} data-comment='Content' />
  );
};
Content.displayName = 'Content';
