"use strict";
import debounce from "../common/debounce";

/**
 * 查重
 */
const unique = function (
  fun: Function,
  id: string = null,
  key: string = "name",
  text: string = "该名称已被使用",
  extra?: {
    [key in string]: any;
  }
) {
  return debounce((rule: any, value: any, callback: Function) => {
    if (value) {
      const data: {
        [key in string]: any;
      } = {};
      data[key] = value;
      if (extra) {
        for (const x in extra) {
          data[x] = extra[x];
          if (extra[x] == "") {
            callback();
          }
        }
      }
      fun(data).then((res: any) => {
        const content = res.content;
        // 编辑
        if (id) {
          if (content.length > 0 && id != content[0].id) {
            callback(new Error(text));
          } else {
            callback();
          }
        }
        // 新建
        else if (content.length > 0) {
          callback(new Error(text));
        } else {
          callback();
        }
      });
    }
  }, 1000);
};

export default unique;
