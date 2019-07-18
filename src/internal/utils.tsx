import * as typestyle from 'typestyle';
import { CSSLength, GLSProps, SizingProp, GLSDefaults, CSSBox } from "../common";
import * as scrollHelpers from "../styles/scroll";
import { content, flex } from '../styles/flex';
import React, { useContext } from 'react';

/**
 * For `number` we assume pixels e.g. 5 => '5px'
 * For `string` *you* should provide the unit e.g. '5px'
 */
export function cssLengthToString(value: CSSLength): string {
  return typeof value === 'number' ? value + 'px' : value;
}

/** 
 * Utility to unwrap the three ways a padding might be provided 
 */
function _processPadding(box: CSSBox)
  : typestyle.types.NestedCSSProperties {
  if (typeof box == 'number' || typeof box == 'string') {
    const value = cssLengthToString(box);
    return { paddingTop: value, paddingRight: value, paddingBottom: value, paddingLeft: value };
  } else if (box.length == 2) {
    const [topBottom, leftRight] = box.map(cssLengthToString);
    return { paddingTop: topBottom, paddingRight: leftRight, paddingBottom: topBottom, paddingLeft: leftRight };
  } else {
    const [top, right, bottom, left] = box.map(cssLengthToString);
    return { paddingTop: top, paddingRight: right, paddingBottom: bottom, paddingLeft: left };
  }
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
  const {
    className,
    padding,
    height,
    minHeight,
    maxHeight,
    width,
    minWidth,
    maxWidth,
    scroll,
    styles = [],
    tag, ...otherProps } = props;

  return React.createElement(
    (tag != null && ('name' in tag) && tag.name != null) ? tag.name : 'div',
    {
      className: typestyle.classes(
        className,
        klass,
        typestyle.style(
          /** Scroll */
          scroll != null && (
            scroll == 'disable' ? scrollHelpers.scrollDisable
              : scroll == 'horizontal' ? scrollHelpers.scrollHorizontal
                : scroll == 'vertical' ? scrollHelpers.scrollVertical
                  : scroll == 'both' ? scrollHelpers.scrollBoth
                    : null
          ),
          /** Padding */
          padding != null && (_processPadding(padding)),
          /** Size props */
          height != null && { height: cssLengthToString(height) },
          minHeight != null && { minHeight: cssLengthToString(minHeight) },
          maxHeight != null && { maxHeight: cssLengthToString(maxHeight) },
          width != null && { width: cssLengthToString(width) },
          minWidth != null && { minWidth: cssLengthToString(minWidth) },
          maxWidth != null && { maxWidth: cssLengthToString(maxWidth) },
          /** Any user customizations */
          ...styles,
        )
      ),
      'data-comment': comment,
      ...otherProps,
      ...((tag != null && tag.props != null) ? tag.props : {}),
    }
  )
}

/** 
 * Generates the appropriate styles to handle the flex interaction 
 */
export function processFlexProp(prop: SizingProp): typestyle.types.CSSProperties {
  const { sizing: fx = 'content' } = prop;
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
