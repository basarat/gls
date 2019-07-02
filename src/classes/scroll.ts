/**
 * @module scroll helpers
 */
import * as typestyle from 'typestyle';

export const scroll = () => typestyle.style({
  '-webkit-overflow-scrolling': 'touch',
  overflow: 'auto'
});

export const scrollHorizontal = () => typestyle.style({
  '-webkit-overflow-scrolling': 'touch',
  overflowX: 'auto'
});

export const scrollVertical = () => typestyle.style({
  '-webkit-overflow-scrolling': 'touch',
  overflowY: 'auto'
});

/**
 * If you expect a child somewhere down in the tree to scroll
 * you need to tell the browser to prevent a scroll bar. 
 * Use : `parent(someChildWillScroll) > child(scroll)`
 */
export const someChildWillScroll = () => typestyle.style({
  overflow: 'hidden'
});
