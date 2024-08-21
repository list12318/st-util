"use strict";
/**
 * 简单处理cookie存储对象
 */
export default {
  get(name: string) {
    let val = "";
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    let tokenInfo = document.cookie.match(reg);
    if (tokenInfo) {
      val = tokenInfo[2];
    }
    return val;
  },
  set(name: string, value: any) {
    document.cookie = `${name}=${value}; domain=${document.domain}; path=/`;
  },
  remove(name: string) {
    let date = new Date();
    date.setTime(date.getTime() - 5);
    let val = "";
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    let tokenInfo = document.cookie.match(reg);
    if (tokenInfo) {
      val = tokenInfo[2];
    }
    document.cookie = name + "=" + val + ";expires=" + date.toUTCString();
  },
};
