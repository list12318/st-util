"use strict";
/**
 * 保留小数
 */

const toFixed = function (
  number: number | string,
  radix?: number,
  zero?: boolean
) {
  let numberStr: number | string = "-";
  const num = parseFloat(number as string);
  if (isNaN(num)) {
    return numberStr;
  }
  numberStr = parseFloat(num.toFixed(radix || 2));
  let s = numberStr.toString();
  if (zero) {
    let rs = s.indexOf(".");
    if (rs < 0) {
      rs = s.length;
      s += ".";
    }
    while (s.length <= rs + radix) {
      s += "0";
    }
  }
  return s;
};

export default toFixed;
