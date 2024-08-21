"use strict";
/**
 * json格式化
 */
const jsonFormat = function (jsonStr: string) {
  let json: string = jsonStr;
  try {
    let reg = null,
      formatted = "",
      pad = 0;
    const PADDING = "    ";
    reg = /([\{\}])/g;
    json = json.replace(reg, "\r\n$1\r\n");
    reg = /([\[\]])/g;
    json = json.replace(reg, "\r\n$1\r\n");
    reg = /(\,)/g;
    json = json.replace(reg, "$1\r\n");
    reg = /(\r\n\r\n)/g;
    json = json.replace(reg, "\r\n");
    reg = /\r\n\,/g;
    json = json.replace(reg, ",");
    reg = /\:\r\n\{/g;
    json = json.replace(reg, ":{");
    reg = /\:\r\n\[/g;
    json = json.replace(reg, ":[");

    json.split("\r\n").forEach((node, index) => {
      let i = 0,
        indent = 0,
        padding = "";

      if (node.match(/\{$/) || node.match(/\[$/)) {
        indent = 1;
      } else if (node.match(/\}/) || node.match(/\]/)) {
        if (pad !== 0) {
          pad -= 1;
        }
      } else {
        indent = 0;
      }

      for (i = 0; i < pad; i++) {
        padding += PADDING;
      }

      formatted += padding + node + "\r\n";
      pad += indent;
    });
    return formatted;
  } catch (e) {
    console.log("JSON反序列化异常");
    return jsonStr;
  }
};

export default jsonFormat;
