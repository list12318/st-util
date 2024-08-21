"use strict";
/**
 * 跳转登录
 */
const redirectToLogin = function (redirect?: boolean) {
  let url = "/service/#/home";
  if (redirect) {
    url += "?redirectURL=" + encodeURIComponent(window.location.href);
  }
  window.location.href = url;
};

export default redirectToLogin;
