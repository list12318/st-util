/**
 * 获取query或header
 */
export interface Param {
    name: string;
    defaultValue: string;
}
declare const getQueryOrHeader: (param: Array<Param>) => {
    [x: string]: string;
};
export default getQueryOrHeader;
