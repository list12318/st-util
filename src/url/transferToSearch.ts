"use strict";
/**
 * Object转换为URL参数
 */
const transferToSearch = function (search: any) {
  const params: any = [];
  Object.keys(search).forEach((val: any) => {
    params.push(`${val}=${search[val]}`);
  });
  return "?" + params.join("&");
};

export default transferToSearch;
