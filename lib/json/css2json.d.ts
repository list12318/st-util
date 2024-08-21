/**
 * 将CSS形式的字符串转换为JSON
 *
 * @param {css字符串} css
 */
declare function css2json(css: string): {
    [x: string]: {
        [x: string]: string;
    };
};
export default css2json;
