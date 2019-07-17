/** 
 * Demo components for docs 
 */

import React from "react";
import * as typestyle from "typestyle";

export const BlueDiv: React.FC = (props) => <div style={{ backgroundColor: "lightskyblue" }} children={props.children} />;
export const PinkDiv: React.FC = (props) => <div style={{ backgroundColor: "lightpink" }} children={props.children} />;

/** 
 * Label 
 */
const labelClass = typestyle.style({
});
export const Label: React.FC = (props) => {
  return <label className={labelClass} children={props.children} />;
}

/** 
 *  Input
 */
const inputClass = typestyle.style({
  width: 'calc(100% - 5px)' /** Docz weirdness */,
  fontSize: '20px',
});
export const Input: React.FC = (_props) => {
  return <input className={inputClass} />;
}
