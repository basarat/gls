import { BoxFunction, BoxUnit, Box } from "../common";
import { boxUnitToString } from "../internal/utils";
import * as typestyle from "typestyle";

/**
 * @param mapFromBox function that expects a full `Box`
 * @returns a function that can work with any partial `Box`
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
