/**
 * 防止json格式化报异常
 */
declare const jsonParse: (text: string, reviver?: (key: any, value: any) => any) => any;
export default jsonParse;
