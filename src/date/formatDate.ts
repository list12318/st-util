"use strict";
/**
 * 防止时间格式化报异常
 */
const formatDate = function (timestamp: number, format: string = "time") {
  //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  if ((timestamp + "").length == 10) {
    timestamp = timestamp * 1000;
  }
  let date = new Date(timestamp);
  let Y = date.getFullYear() + "-";
  let M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  let D = date.getDate() + " ";
  let h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  let m =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":";
  let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  if (format === "time") {
    return Y + M + D + h + m + s;
  } else if (format === "date") {
    return Y + M + D;
  }
};

export default formatDate;
