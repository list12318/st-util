import * as util from "../src/index.ts";
console.log(util)
window.copy = function () {
  util.clipboard.copy("我是从市场上");
};

window.paste = function () {
  util.clipboard.paste();
};
