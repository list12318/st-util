/// <reference types="moment" />
declare const _default: {
    async: {
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
    common: {
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
    date: {
        format: (date?: any) => string;
        uniqueTimestamp: () => number;
        secondsToDate: (seconds: number, format?: string) => any;
        timeRangeToSecond: (startTime?: any, endTime?: any) => number;
        formatDate: (timestamp: number, format?: string) => string;
        moment: typeof import("moment");
        getDate: (nowDate?: any) => any;
    };
    json: {
        jsonParse: (text: string, reviver?: (key: any, value: any) => any) => any;
        jsonStringify: (value: any, replacer?: (key: string, value: any) => any, space?: string | number) => string;
        jsonFormat: (jsonStr: string) => string;
        css2json: typeof import("./json/css2json").default;
        json2css: typeof import("./json/json2css").default;
        getRandomWord: (num: number) => string;
    };
    storage: {
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
    url: {
        getUrlParams: (url?: string) => any;
        transferToSearch: (search: any) => string;
        pathToRegexp: typeof import("path-to-regexp");
        redirectToLogin: (redirect?: boolean) => void;
    };
    validate: {
        regular: {
            commonEn: {
                pattern: RegExp;
                message: string;
            };
            commonCn: {
                pattern: RegExp;
                message: string;
            };
            idEn: {
                pattern: RegExp;
                message: string;
            };
            nameEn: {
                pattern: RegExp;
                message: string;
            };
            nameCn: {
                pattern: RegExp;
                message: string;
            };
            url: {
                pattern: RegExp;
                message: string;
            };
            number: {
                pattern: RegExp;
                message: string;
            };
            phone: {
                pattern: RegExp;
                message: string;
            };
            mobilePhone: {
                pattern: RegExp;
                message: string;
            };
            email: {
                pattern: RegExp;
                message: string;
            };
            password: {
                pattern: RegExp;
                message: string;
            };
            code: {
                pattern: RegExp;
                message: string;
            };
            ip: {
                pattern: RegExp;
                message: string;
            };
            port: {
                pattern: RegExp;
                message: string;
            };
            ipPort: {
                pattern: RegExp;
                message: string;
            };
            httpOrHttps: {
                pattern: RegExp;
                message: string;
            };
            mpPhoneOrphone: {
                pattern: RegExp;
                message: string;
            };
            tableNameEn: {
                pattern: RegExp;
                message: string;
            };
            noNull: {
                pattern: RegExp;
                message: string;
            };
            alphabet: {
                pattern: RegExp;
                message: string;
            };
            length: {
                pattern: RegExp;
                message: string;
            };
            ipCode: {
                pattern: RegExp;
                message: string;
            };
            bpmMail: {
                pattern: RegExp;
                message: string;
            };
            emailM: {
                pattern: RegExp;
                message: string;
            };
            emailPort: {
                pattern: RegExp;
                message: string;
            };
            menuUrl: {
                pattern: RegExp;
                message: string;
            };
            menuImgUrl: {
                pattern: RegExp;
                message: string;
            };
        };
        unique: (fun: Function, id?: string, key?: string, text?: string, extra?: {
            [x: string]: any;
        }) => () => void;
        uniqueDao: (fun: Function, id?: string, key?: string, text?: string, extra?: {
            [x: string]: any;
        }) => () => void;
    };
    request: {
        getBody: (param: import("./request/getBody").Param[]) => {
            [x: string]: string;
        };
        getCustomVarible: (param: import("./request/getCustomVarible").Param[]) => {
            [x: string]: string;
        };
        getQueryOrHeader: (param: import("./request/getQueryOrHeader").Param[]) => {
            [x: string]: string;
        };
    };
    view: {
        getLogPage: (str: string) => void;
    };
    ui: {
        messageBox: (tips: string, callback: Function) => void;
    };
    websocket: {
        socket: typeof import("./websocket/socket").default;
    };
};
export default _default;
