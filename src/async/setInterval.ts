"use strict";
/**
 * 定时器
 */
const setIntervalFn = function () {
  return {
    job: {},
    jobCount: 0,
    execute(fn: Function, delay: number, execute?: boolean) {
      const keyName = `job${this.jobCount++}`;
      if (fn) {
        this.job[keyName] = setInterval(() => {
          fn();
        }, delay || 0);
        if (execute === true) {
          fn();
        }
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

export default setIntervalFn;
