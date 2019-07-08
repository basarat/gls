import * as typestyle from 'typestyle';
import { BoxUnit, GLSProps, FlexProp, GLSDefaults } from "../common";
import * as scrollHelpers from "../styles/scroll";
import { content, flex } from '../styles/flex';
import { useContext } from 'react';

/**
 * For `number` we assume pixels e.g. 5 => '5px'
 * For `string` *you* should provide the unit e.g. '5px'
 */
export function boxUnitToString(value: BoxUnit): string {
  return typeof value === 'number' ? value + 'px' : value;
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
    horizontalSpacing: context.horizontalSpacing == null ? 24 : context.horizontalSpacing
  }
}
