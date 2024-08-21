"use strict";

/**
 * 打开新页面展示log文字
 */

const getLogPage = (str: string) => {
  const newWin = open("", "_blank");
  const t = newWin.document.createElement("textarea");
  t.style.width = "100%";
  t.style.height = "100%";
  t.value = str;
  newWin.document.body.appendChild(t);
};

export default getLogPage;
