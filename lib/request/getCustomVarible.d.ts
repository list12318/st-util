/**
 * 获取自定义变量
 */
export interface Param {
    fieldNameEn: string;
    value: string;
}
declare const getCustomVarible: (param: Array<Param>) => {
    [x: string]: string;
};
export default getCustomVarible;
