"use strict";
/**
 * 获取URL参数
 */
const getUrlParams = function (url?: string) {
  const request: any = {};
  const urls = url || location.href;
  if (urls.indexOf("?") != -1) {
    const arr = urls.split("?");
    const search = arr[arr.length - 1];
    const params = search.split("&");
    params.forEach((val: any) => {
      const temp = val.split("=");
      request[temp[0]] = temp[1];
    });
  }
  return request;
};

export default getUrlParams;
