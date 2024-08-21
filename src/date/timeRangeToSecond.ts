"use strict";
import typeCheck from "../common/typeCheck";
/**
 * 时间范围转秒
 */
const timeRangeToSecond = function (startTime?: any, endTime?: any) {
  let start = 0;
  let end = new Date().getTime();
  if (typeCheck(startTime, "Undefined") || typeCheck(startTime, "Null")) {
    return 0;
  }
  {
    const time = new Date(startTime).getTime();
    if (!isNaN(time)) {
      start = time;
    }
  }
  if (!typeCheck(endTime, "Undefined")) {
    const time = new Date(endTime).getTime();
    if (!isNaN(time)) {
      end = time;
    }
  }
  return Math.round((end - start) / 1000);
};

export default timeRangeToSecond;
