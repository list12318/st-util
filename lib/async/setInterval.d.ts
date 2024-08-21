/**
 * 定时器
 */
declare const setIntervalFn: () => {
    job: {};
    jobCount: number;
    execute(fn: Function, delay: number, execute?: boolean): string;
    clear(key?: string): void;
};
export default setIntervalFn;
