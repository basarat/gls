import * as typestyle from 'typestyle';
import { BoxUnit, GLSProps, FlexProp, GLSDefaults } from "../common";
import * as scrollHelpers from "../styles/scroll";
import { content, flex } from '../styles/flex';
import React, { useContext } from 'react';

/**
 * For `number` we assume pixels e.g. 5 => '5px'
 * For `string` *you* should provide the unit e.g. '5px'
 */
export function boxUnitToString(value: BoxUnit): string {
  return typeof value === 'number' ? value + 'px' : value;
}

/** 
 * Creates the appropriate tag
 * - Does any processing of GLSProps if required
 * - Then creates the approvate react tag
 */
export function createGLSTag<T extends GLSProps>(
  props: T,

  /** Any additional customizations done by the component */
  klass: string,

  /** Comment to help with debuggin */
  comment: string,
) {
  const { className, scroll, styles = [], tag = {}, ...otherProps } = props;

  return React.createElement(
    (('name' in tag) && tag.name != null) ? tag.name : 'div',
    {
      className: typestyle.classes(
        className,
        klass,
        typestyle.style(
          /** Scroll */
          scroll != null && (
            scroll == 'disabled' ? scrollHelpers.scrollDisabled
              : scroll == 'horizontal' ? scrollHelpers.scrollHorizontal
                : scroll == 'vertical' ? scrollHelpers.scrollVertical
                  : scrollHelpers.scrollBoth
          ),
          /** Any user customizations */
          ...styles,
        )
      ),
      'data-comment': comment,
      ...otherProps,
      ...(tag.props != null ? props.tag.props : {}),
    }
  )
}

/** 
 * Generates the appropriate styles to handle the flex interaction 
 */
export function processFlexProp(prop: FlexProp): typestyle.types.CSSProperties {
  const { flex: fx = 'content' } = prop;
  return fx == 'content' ? content
    : fx == 'flex' ? flex(1)
      : flex(fx);
}

/** 
 * Uses the defaults safely 
 */
export function useGLSDefaults() {
  const context = useContext(GLSDefaults);
  return {
    verticalSpacing: context.verticalSpacing == null ? 24 : context.verticalSpacing,
    horizontalSpacing: context.horizontalSpacing == null ? 24 : context.horizontalSpacing,
    breakpoint: context.breakpoint == null ? 480 : context.breakpoint,
  }
}
