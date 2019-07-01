import * as typestyle from 'typestyle';
import * as React from 'react';
import * as csstips from 'csstips';

/** 
 * For providing a *as much as available* amount of space for an item
 */
export const FlexContainer: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { className, ...otherProps } = props;
  const klass = typestyle.classes(
    className,
    typestyle.style(csstips.flex)
  );
  return (
    <div {...otherProps} className={klass} data-comment='FlexContainer' />
  );
};
FlexContainer.displayName = 'FlexContainer';

/** 
 * For providing a *as much as needed* amount of space for an item
 */
export const ContentContainer: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { className, ...otherProps } = props;
  const klass = typestyle.classes(
    className,
    typestyle.style(csstips.content)
  );
  return (
    <div {...otherProps} className={klass} data-comment='ContentContainer' />
  );
};
ContentContainer.displayName = 'ContentContainer';
