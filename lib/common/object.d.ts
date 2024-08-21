declare const object: {
    keys: (object: Object) => string[];
    values: (object: Object) => any[];
    setValue: (data: any, key: string, value: any) => void;
    getValue: (data: any, key: string) => any;
    clone: (origin: any, target: any) => any;
    copy: (data: any) => any;
};
export default object;
