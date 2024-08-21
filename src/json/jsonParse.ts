"use strict";
/**
 * 防止json格式化报异常
 */
const jsonParse = function (
  text: string,
  reviver?: (key: any, value: any) => any
) {
  let jsonObj: any = {};
  try {
    jsonObj = JSON.parse(text, reviver);
  } catch (e) {
    console.log("JSON反序列化异常");
  }
  return jsonObj;
};

export default jsonParse;
