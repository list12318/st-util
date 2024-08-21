/**
 * 将json对象转换为css
 *
 * @param {json对象} json
 */
declare function json2css(json: {
    [key in string]: string;
}): any;
export default json2css;
