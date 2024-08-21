"use strict";
/**
 * 简单处理localStorage存储对象
 */

export default {
  set(key: string, value: any, expire: number) {
    const data = {
      createDate: new Date().getTime(),
      expire,
      value,
    };
    localStorage.setItem(key, JSON.stringify(data));
  },
  get(key: string) {
    const dataStr = localStorage.getItem(key);
    if (!dataStr) {
      return null;
    }
    try {
      const data = JSON.parse(dataStr);
      const now = new Date().getTime();
      if (now - data.createDate > data.expire) {
        localStorage.removeItem(key);
        return null;
      }
      return data.value;
    } catch (e) {
      return null;
    }
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};
