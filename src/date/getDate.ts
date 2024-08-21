"use strict";
/**
 * 获取当前时间
 */
const getDate = function (nowDate?: any) {
  let res = "";
  let str = "";
  let week = nowDate.getDay();
  if (week === 0) {
    str = "星期日";
  } else if (week === 1) {
    str = "星期一";
  } else if (week === 2) {
    str = "星期二";
  } else if (week === 3) {
    str = "星期三";
  } else if (week === 4) {
    str = "星期四";
  } else if (week === 5) {
    str = "星期五";
  } else if (week === 6) {
    str = "星期六";
  }
  str = " " + str + " ";
  let date = nowDate.toLocaleDateString().split("/");
  if (date[1].length != 2) {
    date[1] = "0" + date[1];
  }
  if (date[2].length != 2) {
    date[2] = "0" + date[2];
  }
  date = date.join("-");
  let time = nowDate.toTimeString().split(" ");
  date = date + str + time[0];
  return date;
};

export default getDate;
