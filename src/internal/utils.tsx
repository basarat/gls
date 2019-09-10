import * as typestyle from 'typestyle';
import { CSSLength, BaseProps, GLSDefaults, CSSBox, Scroll, Sizing } from "../common";
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
 * Ensures all four members of box are present
 */
function boxToFullBox(box: CSSBox, name: string): typestyle.types.NestedCSSProperties {
  if (typeof box == 'number' || typeof box == 'string') {
    const value = cssLengthToString(box);
    return {
      [name + 'Top']: value,
      [name + 'Right']: value,
      [name + 'Bottom']: value,
      [name + 'Left']: value,
    };
  } else if (!Array.isArray(box)) {
    const toReturn: any = {};
    if (box.top != null) toReturn[name + 'Top'] = cssLengthToString(box.top);
    if (box.right != null) toReturn[name + 'Right'] = cssLengthToString(box.right);
    if (box.bottom != null) toReturn[name + 'Bottom'] = cssLengthToString(box.bottom);
    if (box.left != null) toReturn[name + 'Left'] = cssLengthToString(box.left);
    return toReturn;
  } else if (box.length == 2) {
    const [topBottom, leftRight] = box.map(cssLengthToString);
    return {
      [name + 'Top']: topBottom,
      [name + 'Right']: leftRight,
      [name + 'Bottom']: topBottom,
      [name + 'Left']: leftRight,
    };
  } else {
    const [top, right, bottom, left] = box.map(cssLengthToString);
    return {
      [name + 'Top']: top,
      [name + 'Right']: right,
      [name + 'Bottom']: bottom,
      [name + 'Left']: left,
    };
  }
}

/** 
 * Utility to unwrap the three ways a padding might be provided 
 */
export function _processPadding(box: CSSBox)
  : typestyle.types.NestedCSSProperties {
  return boxToFullBox(box, 'padding');
}

export function _processScroll(scroll: Scroll) {
  return (
    scroll == 'hidden' ? scrollHelpers.scrollHidden
      : scroll == 'horizontal' ? scrollHelpers.scrollHorizontal
        : scroll == 'vertical' ? scrollHelpers.scrollVertical
          : scrollHelpers.scrollBoth
  );
}

/** 
 * Creates the React tag
 * - Does any processing of `BaseProps` if required
 * - Then creates the appropriate tag
 */
export function createBaseTag<T extends BaseProps>(
  props: T,

  /** Any additional customizations done by the component */
  klass: string,

  /** Comment to help with debugging */
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
    tag,
    ...otherProps } = props;

  return React.createElement(
    (tag != null) ? tag : 'div',
    {
      className: typestyle.classes(
        className,
        klass,
        typestyle.style(
          /** Scroll */
          scroll != null && _processScroll(scroll),
          /** Padding */
          padding != null && _processPadding(padding),
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
    }
  )
}

/** 
 * Generates the appropriate styles to handle the flex interaction 
 */
export function _processSizing(fx: Sizing = 'content'): typestyle.types.CSSProperties {
  return fx == 'content' ? content
    : fx == 'flex' ? flex(1)
      : flex(fx);
}

/** 
 * Uses the defaults safely 
 */
export function useGLSDefaults() {
  const {
    verticalSpacing = 24,
    horizontalSpacing = 24,
    breakpoint = 480
  } = useContext(GLSDefaults);
  return {
    verticalSpacing,
    horizontalSpacing,
    breakpoint,
  }
}
