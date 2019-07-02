import * as typestyle from 'typestyle';
import * as React from 'react';
import * as csstips from 'csstips';

/** 
 * For providing a *as much as available* amount of space for an item
 */
export const Flex: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { className, ...otherProps } = props;
  const klass = typestyle.classes(
    className,
    typestyle.style(csstips.flex)
  );
  return (
    <div {...otherProps} className={klass} data-comment='Flex' />
  );
};
Flex.displayName = 'Flex';

/** 
 * For providing a *as much as needed* amount of space for an item
 */
export const Content: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { className, ...otherProps } = props;
  const klass = typestyle.classes(
    className,
    typestyle.style(csstips.content)
  );
  return (
    <div {...otherProps} className={klass} data-comment='Content' />
  );
};
Content.displayName = 'Content';
