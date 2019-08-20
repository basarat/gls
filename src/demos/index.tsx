/** 
 * Demo components for docs 
 */

import React from "react";
import * as typestyle from "typestyle";
import * as gls from "..";

export const Star: React.FC = () => {
  const link = "https://ghbtns.com/github-btn.html?user=basarat&repo=gls&type=star&count=true"
  return (
    <div style={{ marginTop: '20px' }}>
      <a
        style={{ marginRight: '15px' }}
        href={link}
        target="_blank">Powered by your ⭐s</a>
      <iframe
        src={link}
        style={{ border: 'none', marginBottom: '-3px' }}
        scrolling="0"
        width="170px" height="20px" />
    </div>
  );
}

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


export const DemoProfile: React.FC<{ size: number }> = ({ size }) => {
  return (
    <img
      style={{
        borderRadius: '50%',
        // Explicit size
        width: `${size}px`,
        height: `${size}px`,
      }}
      src={`http://placekitten.com/g/${size}/${size}`} />
  );
}


/** 
 * Example creating a button component 
 */
export interface OnlySomeProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  gls.SizeProps {
}
export const OnlySomePropsButton: React.FC<OnlySomeProps> = (props) => {
  const processedProps = gls.component(props);

  return <button {...processedProps} />;
}

export interface AllTheProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  gls.ComponentProps {
}
export const AllThePropsButton: React.FC<AllTheProps> = (props) => {
  const processedProps = gls.component(props);

  return <button {...processedProps} />;
}

export interface LimitedButtonProps extends
  gls.ComponentProps {
  /** Turns red if in error state */
  error?: boolean
}
export const LimitedButton: React.FC<LimitedButtonProps> = (props) => {
  /** 
   * Generates a className from component props 
   * + returns the rest
   **/
  const { className, error } = gls.component(props);

  /** Handle the error */
  const errorStyle = error ? { backgroundColor: 'red' } : {};

  return <button className={className} style={errorStyle} />;
}


/** 
 * Example creating a default component prop 
 */
export interface DefaultInputProps extends
  React.InputHTMLAttributes<HTMLInputElement>,
  gls.ComponentProps {
}

export const DefaultInput: React.FC<DefaultInputProps> = (props) => {
  const { className, ...otherProps } =
    gls.component(props, { sizing: 'flex' });

  return <input className={className} {...otherProps} />
};

/** 
 * Example creating an input component 
 */
export interface ExampleInputProps extends
  React.InputHTMLAttributes<HTMLInputElement>,
  gls.ComponentProps {
}

export const ExampleInput: React.FC<ExampleInputProps> = (props) => {
  const { className, ...otherProps } =
    gls.component(props, { sizing: 'flex' });

  return <input className={className} {...otherProps} />
};
