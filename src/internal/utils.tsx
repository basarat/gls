import * as typestyle from 'typestyle';
import { CSSLength, BaseProps, SizingProp, GLSDefaults, CSSBox } from "../common";
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
function boxToFullBox(box: CSSBox): [CSSLength, CSSLength, CSSLength, CSSLength] {
  if (typeof box == 'number' || typeof box == 'string') {
    const value = cssLengthToString(box);
    return [value, value, value, value];
  } else if (box.length == 2) {
    const [topBottom, leftRight] = box.map(cssLengthToString);
    return [topBottom, leftRight, topBottom, leftRight];
  } else {
    return box.map(cssLengthToString) as [CSSLength, CSSLength, CSSLength, CSSLength];
  }
}

/** 
 * Utility to unwrap the three ways a padding might be provided 
 */
function _processPadding(box: CSSBox)
  : typestyle.types.NestedCSSProperties {
  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = boxToFullBox(box);
  return { paddingTop, paddingRight, paddingBottom, paddingLeft };
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
            scroll == 'hidden' ? scrollHelpers.scrollHidden
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
export function processSizingProp(prop: SizingProp): typestyle.types.CSSProperties {
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
