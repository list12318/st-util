"use strict";
/**
 * 函数防抖
 */
const debounce = function (fn: Function, delay: number) {
  let timer: number = null;
  return function () {
    const args = arguments;
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

export default debounce;
