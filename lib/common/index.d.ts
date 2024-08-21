declare const _default: {
    typeCheck: (obj: any, type: string) => boolean;
    object: {
        keys: (object: Object) => string[];
        values: (object: Object) => any[];
        setValue: (data: any, key: string, value: any) => void;
        getValue: (data: any, key: string) => any;
        clone: (origin: any, target: any) => any;
        copy: (data: any) => any;
    };
    debounce: (fn: Function, delay: number) => () => void;
    throttle: (fn: Function, delay: number) => () => void;
    unique: (arr: any) => unknown[];
    includes: (str: string, obj: any) => any;
    toFixed: (number: string | number, radix?: number, zero?: boolean) => string;
    encryption: {
        encode: (code: string) => string;
        decode: (code: string) => string;
    };
};
export default _default;
