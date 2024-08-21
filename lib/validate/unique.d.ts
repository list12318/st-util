/**
 * 查重
 */
declare const unique: (fun: Function, id?: string, key?: string, text?: string, extra?: {
    [x: string]: any;
}) => () => void;
export default unique;
