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
 * Cuts off the exccess content and disables the scroll bar
 */
export const scrollDisable: types.NestedCSSProperties = {
  overflow: 'hidden'
};
