/**
 * 将json对象转换为css
 *
 * @param {json对象} json
 */
function json2css(json: { [key in string]: string }) {
  const stringify = JSON.stringify as any;
  return stringify(json, 4)
    .slice(1, JSON.stringify(json).length - 1)
    .replace(new RegExp(",", "gm"), "  ")
    .replace(new RegExp('"', "gm"), "")
    .replace(/:{/gi, "{");
}

export default json2css;
