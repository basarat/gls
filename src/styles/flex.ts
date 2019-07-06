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
export const vertical: types.CSSProperties = extend(flexRoot, {
  '-ms-flex-direction': 'column',
  '-webkit-flex-direction': 'column',
  flexDirection: 'column'
});


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
} as any;



/////////////////////////////
// Alignment in cross axis //
/////////////////////////////

export const start: types.CSSProperties = {
  '-ms-flex-align': 'start',
  '-webkit-align-items': 'flex-start',
  alignItems: 'flex-start'
};
export const center: types.CSSProperties = {
  '-ms-flex-align': 'center',
  '-webkit-align-items': 'center',
  alignItems: 'center'
};
export const end: types.CSSProperties = {
  '-ms-flex-align': 'end',
  '-webkit-align-items': 'flex-end',
  alignItems: 'flex-end'
};

////////////////////////////
// Alignment in main axis //
////////////////////////////

export const startJustified: types.CSSProperties = {
  '-ms-flex-pack': 'start',
  '-webkit-justify-content': 'flex-start',
  justifyContent: 'flex-start'
};
export const centerJustified: types.CSSProperties = {
  '-ms-flex-pack': 'center',
  '-webkit-justify-content': 'center',
  justifyContent: 'center'
};
export const endJustified: types.CSSProperties = {
  '-ms-flex-pack': 'end',
  '-webkit-justify-content': 'flex-end',
  justifyContent: 'flex-end'
};
