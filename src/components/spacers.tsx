import * as typestyle from 'typestyle';
import * as React from 'react';
import { BoxUnit, VerticalSpacingConsumer, HorizontalSpacingConsumer, FlexGrow } from '../common';
import { boxUnitToString } from '../internal/utils';
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
  return (
    <HorizontalSpacingConsumer>
      {
        (horizontal) => {
          const width = boxUnitToString(props.space == null ? horizontal : props.space);
          const styles: React.CSSProperties = {
            display: 'inline-block',
            width: width,
            ...style
          };
          return <div {...otherProps} style={styles} data-comment='HorizontalSpace' />;
        }
      }
    </HorizontalSpacingConsumer>
  );
};
HorizontalSpace.displayName = 'HorizontalSpace';


/**
 * Takes a fixed amount of vertical space
 */
export const VerticalSpace: React.FC<SpaceProps> = (props) => {
  const { style, ...otherProps } = props;

  return (
    <VerticalSpacingConsumer>
      {
        (vertical) => {
          const height = boxUnitToString(props.space == null ? vertical : props.space);
          const styles: React.CSSProperties = {
            height: height,
            ...style
          };
          return <div {...otherProps} style={styles} data-comment='VerticalSpace' />;
        }
      }
    </VerticalSpacingConsumer>
  );
};
VerticalSpace.displayName = 'VerticalSpace';
