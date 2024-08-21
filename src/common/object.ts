"use strict";
import typeCheck from "./typeCheck";

/**
 * Object
 */

const keys = function (object: Object) {
  if (typeCheck(object, "Object")) {
    return Object.keys(object);
  }
  return [];
};

const values = function (object: Object) {
  if (typeCheck(object, "Object")) {
    return Object.values(object);
  }
  return [];
};
const setValue = function (data: any, key: string, value: any) {
  const arr = key.split(".");
  let obj = data;
  if (arr.length === 1) {
    obj[arr[0]] = value;
  } else {
    try {
      for (let i = 0; i < arr.length - 1; i++) {
        if (!obj[arr[i]]) {
          obj[arr[i]] = {};
        }
        obj = obj[arr[i]];
      }
      obj[arr[arr.length - 1]] = value;
    } catch (e) {}
  }
};
const getValue = function (data: any, key: string) {
  const arr = key.split(".");
  let obj = data;
  if (arr.length === 1) {
    return obj[arr[0]];
  } else {
    try {
      for (let i = 0; i < arr.length - 1; i++) {
        if (!obj[arr[i]]) {
          obj[arr[i]] = {};
        }
        obj = obj[arr[i]];
      }
      return obj[arr[arr.length - 1]];
    } catch (e) {
      return null;
    }
  }
};
const clone = function (origin: any, target: any) {
  if (!target) {
    return origin;
  }
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      if (target[prop] !== null && typeCheck(target[prop], "Object")) {
        origin[prop] = origin[prop] || {};
        clone(origin[prop], target[prop]);
      } else {
        origin[prop] = target[prop];
      }
    }
  }
};
const copy = function (data: any) {
  let obj: any;
  if (typeCheck(data, "Array")) {
    obj = [];
    data.forEach((val: any) => {
      obj.push(copy(val));
    });
  } else if (typeCheck(data, "Object")) {
    obj = {};
    for (const key in data) {
      obj[key] = copy(data[key]);
    }
  } else {
    return data;
  }
  return obj;
};

const object = {
  keys,
  values,
  setValue,
  getValue,
  clone,
  copy,
};

export default object;
