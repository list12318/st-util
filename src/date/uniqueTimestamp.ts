"use strict";
/**
 * 获取不重复的时间戳
 */
const uniqueTimestamp = function () {
  return new Date().getTime();
};

export default uniqueTimestamp;
