import { PaddingProp, ClassNameProp } from "../common";
import * as typestyle from "typestyle";

/** 
 * A set of props that can help you build layout-customizable components
 */
export interface ComponentProps extends
  ClassNameProp,
  PaddingProp {
}

/** 
 * Takes a set of component props 
 * @returns a css className that actions all the component props 
 */
export function component<T extends ComponentProps>(props: T, _defaults?: T): string {
  const styles: typestyle.types.NestedCSSProperties[] = [];

  return typestyle.classes(
    props.className,
    typestyle.style(...styles),
  );
}
