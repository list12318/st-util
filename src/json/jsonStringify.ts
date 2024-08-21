"use strict";
/**
 * 防止json格式化报异常
 */
const jsonStringify = function (
  value: any,
  replacer?: (key: string, value: any) => any,
  space?: string | number
) {
  let jsonStr: string = "";
  try {
    jsonStr = JSON.stringify(value, replacer, space);
  } catch (e) {
    console.log("JSON序列化异常");
  }
  return jsonStr;
};

export default jsonStringify;
