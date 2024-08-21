"use strict";

const typeCheck = (obj: any, type: string) => {
  return Object.prototype.toString.call(obj) == `[object ${type}]`;
};

export default typeCheck;
