import * as typestyle from 'typestyle';
import * as React from 'react';
import * as csstips from 'csstips';
import { Spacing, BoxUnit } from '../common';
import { boxUnitToString } from '../internal/utils';

/** 
 * Flexes into any available space 
 */
export const FlexSpace: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { className, ...otherProps } = props;
  const klass = typestyle.classes(
    className,
    typestyle.style(csstips.flex)
  );
  return (
    <div {...otherProps} className={klass} data-comment='FlexSpace' />
  );
};
FlexSpace.displayName = 'FlexSpace';

/** 
 * Common interface for space props 
 */
interface SpaceProps extends React.HTMLProps<HTMLDivElement> {
  space?: BoxUnit;
}

/**
 * Takes a fixed amount of horizontal space
 */
export const HorizontalSpace: React.FC<SpaceProps> = (props) => {
  const { style, ...otherProps } = props;
  const width = boxUnitToString(props.space == null ? Spacing.horizontal : props.space);
  const styles: React.CSSProperties = {
    display: 'inline-block',
    width: width,
    ...style
  };
  return (
    <div {...otherProps} style={styles} data-comment='HorizontalSpace' />
  );
};
HorizontalSpace.displayName = 'HorizontalSpace';


/**
 * Takes a fixed amount of vertical space
 */
export const VerticalSpace: React.FC<SpaceProps> = (props) => {
  const { style, ...otherProps } = props;
  const height = boxUnitToString(props.space == null ? Spacing.vertical : props.space);
  const styles: React.CSSProperties = {
    height: height,
    ...style
  };
  return (
    <div {...otherProps} style={styles} data-comment='VerticalSpace' />
  );
};
VerticalSpace.displayName = 'VerticalSpace';
