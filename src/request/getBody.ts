"use strict";

/**
 * 获取body
 */

export interface Param {
  name: string;
  children: Array<Param>;
  defaultValue: string;
}
const getBody = function (param: Array<Param>) {
  const body: {
    [key in string]: string;
  } = {};
  if (param && param.length) {
    param.forEach((item) => {
      if (item.children && item.children.length > 0) {
        body[item.name] = this.getBody(item.children, {});
      } else {
        body[item.name] = item.defaultValue;
      }
    });
  }
  return body;
};

export default getBody;
