"use strict";
/**
 * 防止时间格式化报异常
 */
const format = function (date?: any) {
  let dateStr = "-";
  const dateObj = new Date(date);
  if (date && dateObj.toString() !== "Invalid Date") {
    dateStr = dateObj.toLocaleString("chinese", { hour12: false });
    dateStr = dateStr.replace(/\//g, "-");
  }
  return dateStr;
};

export default format;
