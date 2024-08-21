import css2json from "./css2json";
import json2css from "./json2css";
declare const _default: {
    jsonParse: (text: string, reviver?: (key: any, value: any) => any) => any;
    jsonStringify: (value: any, replacer?: (key: string, value: any) => any, space?: string | number) => string;
    jsonFormat: (jsonStr: string) => string;
    css2json: typeof css2json;
    json2css: typeof json2css;
    getRandomWord: (num: number) => string;
};
export default _default;
