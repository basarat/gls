import { BoxFunction, Box, BoxUnit } from "../common";
import { boxUnitToString } from "../internal/utils";

/**
 * Takes a function that expects Box to be passed into it
 * and creates a BoxFunction
 */
function createBoxFunction<T>(mapFromBox: (box: Box) => T): BoxFunction<T> {
  const result: BoxFunction<T> = (a: BoxUnit, b?: BoxUnit, c?: BoxUnit, d?: BoxUnit) => {
    if (b === undefined && c === undefined && d === undefined) {
      b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
      c = a;
      d = b;
    }

    let box = {
      top: boxUnitToString(a),
      right: boxUnitToString(b!),
      bottom: boxUnitToString(c!),
      left: boxUnitToString(d!)
    };

    return mapFromBox(box);
  }
  return result;
}