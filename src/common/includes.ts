"use strict";
/**
 * 判断字符str是否包含在obj中,obj可以是数字、字符串、数组,不区分大小写
 */
import typeCheck from "./typeCheck";

const includes = function (str: string, obj: any) {
  if (typeCheck(str, "Null")) {
    return false;
  }
  if (typeCheck(obj, "String")) {
    return obj.toLowerCase().indexOf(str.toString().toLowerCase()) !== -1;
  }
  if (typeCheck(obj, "Number")) {
    return (
      obj.toString().toLowerCase().indexOf(str.toString().toLowerCase()) !== -1
    );
  }
  if (typeCheck(obj, "Array")) {
    return obj.some((val: any) => {
      return (
        val.toString().toLowerCase().indexOf(str.toString().toLowerCase()) !==
        -1
      );
    });
  }
  return false;
};

export default includes;
