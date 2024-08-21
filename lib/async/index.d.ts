declare const _default: {
    setInterval: () => {
        job: {};
        jobCount: number;
        execute(fn: Function, delay: number, execute?: boolean): string;
        clear(key?: string): void;
    };
    setTimeout: () => {
        job: {};
        jobCount: number;
        execute(fn: Function, delay: number): string;
        clear(key?: string): void;
    };
};
export default _default;
