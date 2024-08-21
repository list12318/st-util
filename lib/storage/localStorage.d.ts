declare const _default: {
    set(key: string, value: any, expire: number): void;
    get(key: string): any;
    remove(key: string): void;
    clear(): void;
};
/**
 * 简单处理localStorage存储对象
 */
export default _default;
