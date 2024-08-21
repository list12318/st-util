/**
 * 函数防抖
 */
declare const debounce: (fn: Function, delay: number) => () => void;
export default debounce;
