declare const _default: {
    localStorage: {
        set(key: string, value: any, expire: number): void;
        get(key: string): any;
        remove(key: string): void;
        clear(): void;
    };
    sessionStorage: {
        set(key: string, value: any, expire: number): void;
        get(key: string): any;
        remove(key: string): void;
        clear(): void;
    };
    cookieStorage: {
        get(name: string): string;
        set(name: string, value: any): void;
        remove(name: string): void;
    };
};
export default _default;
