"use strict";
/**
 * 延时器
 */
const setTimeoutFn = function () {
  return {
    job: {},
    jobCount: 0,
    execute(fn: Function, delay: number) {
      const keyName = `job${this.jobCount++}`;
      if (fn) {
        this.job[keyName] = setTimeout(() => {
          fn();
        }, delay || 0);
      }
      return keyName;
    },
    clear(key?: string) {
      if (typeof key == "undefined") {
        for (const x in this.job) {
          clearInterval(this.job[x]);
          delete this.job[x];
          this.jobCount--;
        }
      } else if (this.job[key]) {
        clearInterval(this.job[key]);
        delete this.job[key];
        this.jobCount--;
      }
    },
  };
};

export default setTimeoutFn;
