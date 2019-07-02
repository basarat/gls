import * as typestyle from 'typestyle';
import { BoxUnit, GLSProps } from "../common";
import * as scrollHelpers from "../classes/scroll";

/**
 * For `number` we assume pixels e.g. 5 => '5px'
 * For `string` *you* should provide the unit e.g. '5px'
 */
export function boxUnitToString(value: BoxUnit): string {
  if (typeof value === 'number') {
    return value.toString() + 'px';
  }
  else {
    return value;
  }
}

/** 
 * Converts common suppoted props into a `klass` + remainder 
 */
export function processCommonProps<T extends GLSProps>(props: T): { klass: string, otherProps: any } {
  const { scroll, padding, ...otherProps } = props;

  return {
    klass: typestyle.classes(
      /** Scroll */
      props.scroll != null && (
        props.scroll == 'horizontal' ? scrollHelpers.scrollHorizontal()
          : props.scroll == 'vertical' ? scrollHelpers.scrollVertical()
            : scrollHelpers.scroll()
      ),
    /** Padding */
      props.padding != null && typestyle.style()
    ),
    otherProps
  }
}