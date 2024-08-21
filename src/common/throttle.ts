"use strict";
/**
 * 函数节流
 */
const throttle = function (fn: Function, delay: number) {
  let last = 0;
  return function () {
    const curr = +new Date();
    if (curr - last > delay) {
      fn.apply(this, arguments);
      last = curr;
    }
  };
};

export default throttle;
