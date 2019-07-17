import { BoxFunction, BoxUnit } from "../common";
import { boxUnitToString } from "../internal/utils";

/**
 * @param mapFromBox function that expects a full `BoxUnit` set
 * @returns a function that can work with any partial `BoxUnit`
 */
function createBoxFunction<T>(mapFromBox: (a: BoxUnit, b: BoxUnit, c: BoxUnit, d: BoxUnit) => T): BoxFunction<T> {
  const result: BoxFunction<T> = (a: BoxUnit, b?: BoxUnit, c?: BoxUnit, d?: BoxUnit) => {
    if (b === undefined && c === undefined && d === undefined) {
      b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
      c = a;
      d = b;
    }

    return mapFromBox(
      boxUnitToString(a),
      boxUnitToString(b!),
      boxUnitToString(c!),
      boxUnitToString(d!)
    );
  }
  return result;
}

/** 
 * Padding 
 */
export const padding = createBoxFunction((top, right, bottom, left) => {
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
export const border = createBoxFunction((top, right, bottom, left) => {
  return {
    borderTop: top,
    borderRight: right,
    borderBottom: bottom,
    borderLeft: left
  };
});

/** 
 * Width 
 */
export const width = (value: BoxUnit) => {
  return { width: boxUnitToString(value) };
}

/** 
 * Height
 */
export const height = (value: BoxUnit) => {
  return { height: boxUnitToString(value) };
}

/** 
 * Max Width 
 */
export const maxWidth = (value: BoxUnit) => {
  return { maxWidth: boxUnitToString(value) };
}

/** 
 * Max Height
 */
export const maxHeight = (value: BoxUnit) => {
  return { maxHeight: boxUnitToString(value) };
}
