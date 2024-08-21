"use strict";
/**
 * 简单处理sessionStorage存储对象
 */
import typeCheck from "../common/typeCheck";

export default {
  set(key: string, value: any, expire: number) {
    const data = {
      createDate: new Date().getTime(),
      expire,
      value,
    };
    sessionStorage.setItem(key, JSON.stringify(data));
  },
  get(key: string) {
    const dataStr = sessionStorage.getItem(key);
    if (!dataStr) {
      return null;
    }
    try {
      const data = JSON.parse(dataStr);
      const now = new Date().getTime();
      if (now - data.createDate > data.expire) {
        sessionStorage.removeItem(key);
        return null;
      }
      return data.value;
    } catch (e) {
      return null;
    }
  },
  remove(key: string) {
    sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  },
};
