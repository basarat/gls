import * as typestyle from 'typestyle';
import * as React from 'react';
import { BoxUnit, FlexGrow } from '../common';
import { boxUnitToString, useGLSDefaults } from '../internal/utils';
import { flex } from '../styles/flex';

export interface FlexSpaceProps extends React.HTMLProps<HTMLDivElement> {
  flex?: FlexGrow;
}

/** 
 * Flexes into any available space 
 */
export const FlexSpace: React.FC<FlexSpaceProps> = (props) => {
  const { className, flex: fx, ...otherProps } = props;
  const klass = typestyle.classes(
    className,
    typestyle.style(flex(fx))
  );
  return (
    <div {...otherProps} className={klass} data-comment='FlexSpace' />
  );
};
FlexSpace.displayName = 'FlexSpace';

/** 
 * Common interface for space props 
 */
export interface SpaceProps extends React.HTMLProps<HTMLDivElement> {
  space?: BoxUnit;
}

/**
 * Takes a fixed amount of horizontal space
 */
export const HorizontalSpace: React.FC<SpaceProps> = (props) => {
  const { style, ...otherProps } = props;
  const { horizontalSpacing } = useGLSDefaults();
  const width = boxUnitToString(props.space == null ? horizontalSpacing : props.space);
  const styles: React.CSSProperties = {
    display: 'inline-block',
    width: width,
    ...style
  };
  return <div {...otherProps} style={styles} data-comment='HorizontalSpace' />;
};
HorizontalSpace.displayName = 'HorizontalSpace';


/**
 * Takes a fixed amount of vertical space
 */
export const VerticalSpace: React.FC<SpaceProps> = (props) => {
  const { style, ...otherProps } = props;
  const { verticalSpacing } = useGLSDefaults();
  const height = boxUnitToString(props.space == null ? verticalSpacing : props.space);
  const styles: React.CSSProperties = {
    height: height,
    ...style
  };
  return <div {...otherProps} style={styles} data-comment='VerticalSpace' />;
};
VerticalSpace.displayName = 'VerticalSpace';
