"use strict";
/**
 * mesaage
 */
const messageBox = function (tips: string, callback: Function) {
  const win = window as any;
  win.ELEMENT.MessageBox.confirm(tips, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      if (callback) {
        callback();
      }
    })
    .catch(() => {});
};

export default messageBox;
