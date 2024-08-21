/**
 * 获取body
 */
export interface Param {
    name: string;
    children: Array<Param>;
    defaultValue: string;
}
declare const getBody: (param: Array<Param>) => {
    [x: string]: string;
};
export default getBody;
