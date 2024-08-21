/**
 * 防止json格式化报异常
 */
declare const jsonStringify: (value: any, replacer?: (key: string, value: any) => any, space?: string | number) => string;
export default jsonStringify;
