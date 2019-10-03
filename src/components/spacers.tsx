import * as typestyle from 'typestyle';
import * as React from 'react';
import { CSSLength } from '../common';
import { cssLengthToString, useGLSDefaults } from '../internal/utils';
import { stretch } from '../styles/flex';

export interface StretchSpacerProps extends React.HTMLProps<HTMLDivElement> {
  sizing?: number;
}

/** 
 * Flexes into any available space 
 */
export const StretchSpacer: React.FC<StretchSpacerProps> = (props) => {
  const { className, sizing, ...otherProps } = props;
  const klass = typestyle.classes(
    className,
    typestyle.style(stretch(sizing))
  );
  return (
    <div {...otherProps} className={klass} data-comment='StretchSpacer' />
  );
};
StretchSpacer.displayName = 'StretchSpacer';

/** 
 * Common interface for space props 
 */
export interface SpacerProps extends React.HTMLProps<HTMLDivElement> {
  space?: CSSLength;
}

/**
 * Takes a fixed amount of horizontal space
 */
export const HorizontalSpacer: React.FC<SpacerProps> = (props) => {
  const { style, ...otherProps } = props;
  const { horizontalSpacing } = useGLSDefaults();
  const width = cssLengthToString(props.space == null ? horizontalSpacing : props.space);
  const styles: React.CSSProperties = {
    display: 'inline-block',
    width: width,
    ...style
  };
  return <div {...otherProps} style={styles} data-comment='HorizontalSpacer' />;
};
HorizontalSpacer.displayName = 'HorizontalSpacer';


/**
 * Takes a fixed amount of vertical space
 */
export const VerticalSpacer: React.FC<SpacerProps> = (props) => {
  const { style, ...otherProps } = props;
  const { verticalSpacing } = useGLSDefaults();
  const height = cssLengthToString(props.space == null ? verticalSpacing : props.space);
  const styles: React.CSSProperties = {
    height: height,
    ...style
  };
  return <div {...otherProps} style={styles} data-comment='VerticalSpacer' />;
};
VerticalSpacer.displayName = 'VerticalSpacer';
