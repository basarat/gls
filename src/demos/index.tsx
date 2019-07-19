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
 * Input
 */
const inputClass = typestyle.style({
  width: 'calc(100% - 5px)' /** Docz weirdness */,
  fontSize: '20px',
});
export const Input: React.FC = (_props) => {
  return <input className={inputClass} />;
}

/** 
 * Button 
 */
export const buttonClass = typestyle.style(
  {
    fontFamily: 'helvetica',
    cursor: 'pointer',
    height: 'auto',
    padding: "12px 30px 11px",
    border: `1px solid #333`,
    borderRadius: '3px',
    color: `white`,
    backgroundColor: '#333',
    fontSize: '15px',
    textDecoration: "none",
    lineHeight: "1em",
    outline: 'none',
    transition: 'color .2s, background-color .2s',
    display: 'inline-block',
    $nest: {
      '&:hover': {
        backgroundColor: '#666',
      },
      '&:active': {
        backgroundColor: '#666',
      },
      '&:focus': {
        outline: 'thin dotted',
        outlineColor: `#333`
      }
    }
  });
export const Button
  = (props: React.HTMLProps<HTMLButtonElement>) => {
    const { className, ...otherProps } = props;
    return (
      <button {...otherProps}
        type="button"
        className={typestyle.classes(buttonClass, props.className)}
      />
    );
  };
