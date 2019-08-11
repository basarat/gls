import { cssRule } from "typestyle";
import { normalize } from "./normalize";

/** 
 * Setups: 
 * - normalize 
 * - border box
 * - fill body into page
 * - fill root-selector into body
 */
export function base(rootSelector?: string) {
  /** normalize */
  normalize();

  /** Use border box */
  cssRule('html', {
    '-moz-box-sizing': 'border-box',
    '-webkit-box-sizing': 'border-box',
    boxSizing: 'border-box'
  });
  cssRule('*,*:before,*:after', {
    boxSizing: 'inherit',
  });

  /** Use full window size for application */
  cssRule('html, body', {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0
  });

  if (rootSelector) {
    /** Root should fill parent */
    cssRule(rootSelector, {
      width: '100%',
      height: '100%',
    });
  }
}
