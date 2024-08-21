/**
 * 延时器
 */
declare const setTimeoutFn: () => {
    job: {};
    jobCount: number;
    execute(fn: Function, delay: number): string;
    clear(key?: string): void;
};
export default setTimeoutFn;
