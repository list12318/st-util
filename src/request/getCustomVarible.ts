"use strict";
/**
 * 获取自定义变量
 */

export interface Param {
  fieldNameEn: string;
  value: string;
}
const getCustomVarible = function (param: Array<Param>) {
  const result: {
    [key in string]: string;
  } = {};
  if (param && param.length) {
    param.forEach((item) => {
      result[item.fieldNameEn] = item.value;
    });
  }
  return result;
};

export default getCustomVarible;
