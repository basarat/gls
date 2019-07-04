import { BoxFunction, BoxUnit, Box } from "../common";
import { boxUnitToString } from "../internal/utils";
import * as typestyle from "typestyle";

/**
 * Takes a function that expects a full Box to be passed into it
 * and creates a BoxFunction
 */
function createBoxFunction(
  mapFromBox: (box: [BoxUnit, BoxUnit, BoxUnit, BoxUnit]) => typestyle.types.NestedCSSProperties
): BoxFunction {
  const result: BoxFunction = (box: Box) => {
    if (typeof box == 'string' || typeof box == 'number') {
      const united = boxUnitToString(box);
      return typestyle.style(mapFromBox([united, united, united, united]));
    } else if (box.length == 2) {
      const [topBottom, leftRight] = box.map(boxUnitToString);
      return typestyle.style(mapFromBox([topBottom, leftRight, topBottom, leftRight]));
    } else {
      return typestyle.style(mapFromBox(box.map(boxUnitToString) as any));
    }
  }
  return result;
}

/** 
 * Padding 
 */
export const padding = createBoxFunction(([top, right, bottom, left]) => {
  return {
    paddingTop: top,
    paddingRight: right,
    paddingBottom: bottom,
    paddingLeft: left
  };
});

/** 
 * Border
 */
export const border = createBoxFunction(([top, right, bottom, left]) => {
  return {
    borderTop: top,
    borderRight: right,
    borderBottom: bottom,
    borderLeft: left
  };
});
