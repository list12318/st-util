"use strict";
/**
 * 数组去重
 */
const unique = function (arr: any) {
  return Array.from(new Set(arr));
};

export default unique;
