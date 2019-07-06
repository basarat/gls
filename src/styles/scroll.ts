/**
 * @module scroll helpers
 */
import { types } from 'typestyle';

export const scrollBoth: types.NestedCSSProperties = {
  '-webkit-overflow-scrolling': 'touch',
  overflow: 'auto'
};

export const scrollHorizontal: types.NestedCSSProperties = {
  '-webkit-overflow-scrolling': 'touch',
  overflowX: 'auto'
};

export const scrollVertical: types.NestedCSSProperties = {
  '-webkit-overflow-scrolling': 'touch',
  overflowY: 'auto'
};

/**
 * If you expect a child somewhere down in the tree to scroll
 * you need to tell the browser to prevent a scroll bar. 
 * Example use : `parent(scrollDisabled) > child(scroll)`
 */
export const scrollDisabled: types.NestedCSSProperties = {
  overflow: 'hidden'
};
