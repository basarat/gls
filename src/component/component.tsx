import { PaddingProp, ClassNameProp } from "../common";
import * as typestyle from "typestyle";
import { _processPadding } from "../internal/utils";

/** 
 * A set of props that can help you build layout-customizable components
 */
export interface ComponentProps extends
  ClassNameProp,
  PaddingProp {
}

/** 
 * Takes a set of component props 
 * - actions certain props to update the `props` className
 * @returns `props` with actioned members omitted and className updated
 */
export function component<T extends ComponentProps>(props: T, _defaults?: T)
  : Omit<T, 'padding'> {
  const styles: typestyle.types.NestedCSSProperties[] = [];

  const {
    padding,
    ...result
  } = props;

  if (padding != null) styles.push(_processPadding(padding));

  result.className = typestyle.classes(
    props.className,
    typestyle.style(...styles),
  );

  return result;
}
