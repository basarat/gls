import * as typestyle from 'typestyle';
import * as React from 'react';
import * as csstips from 'csstips';

/**
 * TODO:
 * HorizontalSpacer
 * VerticalSpacer
 */

 export const FlexSpacer: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { className, ...otherProps } = props;
  const klass = typestyle.classes(
    className,
    typestyle.style(csstips.flex)
  );
  return (
    <div {...otherProps} className={klass} data-comment='FlexSpacer' />
  );
};
FlexSpacer.displayName = 'FlexSpacer';
