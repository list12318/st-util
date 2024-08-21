/**
 * 查重
 */
declare const uniqueDao: (fun: Function, id?: string, key?: string, text?: string, extra?: {
    [x: string]: any;
}) => () => void;
export default uniqueDao;
