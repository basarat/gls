import { cssRule } from "typestyle";
import { normalize } from "./normalize";

/** 
 * Setups: 
 * - normalize 
 * - box model : border box
 * - full body width 
 */
export function base(selector: string) {
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

  /** Root should fill parent */
  cssRule(selector, {
    width: '100%',
    height: '100%',
  });
}
