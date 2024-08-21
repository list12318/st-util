/// <reference types="moment" />
import moment from "./moment";
declare const _default: {
    format: (date?: any) => string;
    uniqueTimestamp: () => number;
    secondsToDate: (seconds: number, format?: string) => any;
    timeRangeToSecond: (startTime?: any, endTime?: any) => number;
    formatDate: (timestamp: number, format?: string) => string;
    moment: typeof moment;
    getDate: (nowDate?: any) => any;
};
export default _default;
