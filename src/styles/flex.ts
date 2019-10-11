import { types, extend } from "typestyle";

/**
 * 
 * If you have more than one child prefer horizontal,vertical
 */
export const flexRoot: types.CSSProperties = {
  display: [
    '-ms-flexbox',
    '-webkit-flex',
    'flex',
  ]
};

export const horizontal: types.CSSProperties = extend(flexRoot, {
  '-ms-flex-direction': 'row',
  '-webkit-flex-direction': 'row',
  flexDirection: 'row'
});
export const horizontalReverse: types.CSSProperties = extend(flexRoot, {
  '-ms-flex-direction': 'row-reverse',
  '-webkit-flex-direction': 'row-reverse',
  flexDirection: 'row-reverse'
});
export const vertical: types.CSSProperties = extend(flexRoot, {
  '-ms-flex-direction': 'column',
  '-webkit-flex-direction': 'column',
  flexDirection: 'column'
});
export const wrap: types.CSSProperties = {
  '-ms-flex-wrap': 'wrap',
  '-webkit-flex-wrap': 'wrap',
  flexWrap: 'wrap'
} as types.CSSProperties;

/**
 * If you want items to be sized automatically by their children use this
 * This is because of a bug in various flexbox implementations: http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
 * Specifically bug 1 : https://github.com/philipwalton/flexbugs#1-minimum-content-sizing-of-flex-items-not-honored
 */
export const content: types.CSSProperties = {
  '-ms-flex-negative': 0,
  '-webkit-flex-shrink': 0,
  flexShrink: 0,
  flexBasis: 'auto',
} as types.CSSProperties;

export const stretch = (stretch: number = 1): types.CSSProperties => {
  return {
    '-ms-flex': stretch,
    '-webkit-flex': stretch,
    flex: stretch
  };
};

/////////////////////////////
// Alignment in cross axis //
/////////////////////////////

export const start: types.CSSProperties = {
  '-ms-flex-align': 'start',
  '-webkit-align-items': 'flex-start',
  alignItems: 'flex-start'
} as types.CSSProperties;
export const center: types.CSSProperties = {
  '-ms-flex-align': 'center',
  '-webkit-align-items': 'center',
  alignItems: 'center'
} as types.CSSProperties;
export const end: types.CSSProperties = {
  '-ms-flex-align': 'end',
  '-webkit-align-items': 'flex-end',
  alignItems: 'flex-end'
} as types.CSSProperties;
export const baseline: types.CSSProperties = {
  '-ms-flex-align': 'baseline',
  '-webkit-align-items': 'baseline',
  alignItems: 'baseline'
} as types.CSSProperties;

////////////////////////////
// Alignment in main axis //
////////////////////////////

export const startJustified: types.CSSProperties = {
  '-ms-flex-pack': 'start',
  '-webkit-justify-content': 'flex-start',
  justifyContent: 'flex-start'
} as types.CSSProperties;
export const centerJustified: types.CSSProperties = {
  '-ms-flex-pack': 'center',
  '-webkit-justify-content': 'center',
  justifyContent: 'center'
} as types.CSSProperties;
export const endJustified: types.CSSProperties = {
  '-ms-flex-pack': 'end',
  '-webkit-justify-content': 'flex-end',
  justifyContent: 'flex-end'
} as types.CSSProperties;

/////////////////////////////////////////////////////////////
// Alignment in main axis - specific to our Grid component //
/////////////////////////////////////////////////////////////
export const betweenJustified = {
  '-ms-flex-pack': 'justify',
  '-webkit-justify-content': 'space-between',
  justifyContent: 'space-between'
} as types.CSSProperties;

export const aroundJustified = {
  '-ms-flex-pack': 'distribute',
  '-webkit-justify-content': 'space-around',
  justifyContent: 'space-around'
} as types.CSSProperties;

////////////////////
// Self alignment //
////////////////////
export const crossAxisStretch = {
  '-ms-flex-item-align': 'stretch',
  '-webkit-align-self': 'stretch',
  alignSelf: 'stretch',
} as types.CSSProperties;
export const crossAxisStart = {
  '-ms-flex-item-align': 'start',
  '-webkit-align-self': 'flex-start',
  alignSelf: 'flex-start'
} as types.CSSProperties;
export const crossAxisCenter = {
  '-ms-flex-item-align': 'center',
  '-webkit-align-self': 'center',
  alignSelf: 'center'
} as types.CSSProperties;
export const crossAxisEnd = {
  '-ms-flex-item-align': 'end',
  '-webkit-align-self': 'flex-end',
  alignSelf: 'flex-end'
} as types.CSSProperties;
