import * as typestyle from 'typestyle';
import { BoxUnit, GLSProps, FlexProp } from "../common";
import * as scrollHelpers from "../styles/scroll";
import { content } from '../styles/flex';

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
export function processGLSProps<T extends GLSProps>(props: T): Omit<T, 'scroll' | 'styles'> {
  const { scroll, styles = [], ...otherProps } = props;

  return {
    ...otherProps,
    className: typestyle.classes(
      props.className,
      typestyle.style(
        /** Scroll */
        props.scroll != null && (
          props.scroll == 'disabled' ? scrollHelpers.scrollDisabled
            : props.scroll == 'horizontal' ? scrollHelpers.scrollHorizontal
              : props.scroll == 'vertical' ? scrollHelpers.scrollVertical
                : scrollHelpers.scrollBoth
        ),
        /** Any user customizations */
        ...styles,
      )
    ),
  }
}

/** 
 * Generates the appropriate styles to handle the flex interaction 
 */
export function processFlexProp(prop: FlexProp): typestyle.types.CSSProperties {
  const { flex } = prop;
  if (flex == null || flex == 'content') {
    return content;
  } else {
    return {
      '-ms-flex': flex,
      '-webkit-flex': flex,
      flex: flex,
    };
  }
}
