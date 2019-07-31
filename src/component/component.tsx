import { PaddingProp, ClassNameProp, ScrollProp, SizeProps, StylesProp, SizingProp } from "../common";
import * as typestyle from "typestyle";
import { _processPadding, _processScroll, cssLengthToString, _processSizing } from "../internal/utils";

/** 
 * A set of props that can help you build layout-customizable components
 */
export interface ComponentProps extends
  ClassNameProp,
  ScrollProp,
  PaddingProp,
  SizingProp,
  SizeProps,
  StylesProp {
}

/** 
 * Takes a set of component props 
 * - actions certain props to update the `props` className
 * @returns `props` with actioned members omitted and className updated
 */
export function component<T extends ComponentProps>(props: T, _defaults?: T)
  : Omit<
    T,
    | 'padding'
    | 'scroll'
    | 'sizing'

    | 'height'
    | 'minHeight'
    | 'maxHeight'
    | 'width'
    | 'minWidth'
    | 'maxWidth'

    | 'styles'
  > {
  let stylesToProcess: (typestyle.types.NestedCSSProperties | false | null)[] = [];

  const {
    padding,
    scroll,
    sizing,

    height,
    minHeight,
    maxHeight,
    width,
    minWidth,
    maxWidth,

    styles,

    ...result
  } = props;

  if (padding != null) stylesToProcess.push(_processPadding(padding));
  if (scroll != null) stylesToProcess.push(_processScroll(scroll));
  if (sizing != null) stylesToProcess.push(_processSizing(sizing));

  if (height != null) stylesToProcess.push({ height: cssLengthToString(height) });
  if (minHeight != null) stylesToProcess.push({ minHeight: cssLengthToString(minHeight) });
  if (maxHeight != null) stylesToProcess.push({ maxHeight: cssLengthToString(maxHeight) });
  if (width != null) stylesToProcess.push({ width: cssLengthToString(width) });
  if (minWidth != null) stylesToProcess.push({ minWidth: cssLengthToString(minWidth) });
  if (maxWidth != null) stylesToProcess.push({ maxWidth: cssLengthToString(maxWidth) });

  if (styles != null) stylesToProcess = stylesToProcess.concat(styles);

  result.className = typestyle.classes(
    props.className,
    typestyle.style(...stylesToProcess),
  );

  return result;
}
