/**
 * 函数节流
 */
declare const throttle: (fn: Function, delay: number) => () => void;
export default throttle;
