"use strict";
/**
 * 获取query或header
 */

export interface Param {
  name: string;
  defaultValue: string;
}
const getQueryOrHeader = function (param: Array<Param>) {
  const result: {
    [key in string]: string;
  } = {};
  if (param && param.length) {
    param.forEach((item) => {
      result[item.name] = item.defaultValue;
    });
  }
  return result;
};

export default getQueryOrHeader;
