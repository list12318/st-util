"use strict";
/**
 * 秒转换小时分钟秒
 */

const secondsToDate = function (seconds: number, format: string = "day") {
  const dateMap = MillisecondToDate(seconds);
  const dateString = dateFormat(dateMap, format);
  return dateString;
};

function MillisecondToDate(msd: number) {
  msd = msd || 0;
  msd = Math.floor(msd);
  let day: number = 0;
  let hour: number = 0;
  let min: number = 0;
  let second: number = 0;
  if (msd < 60) {
    second = msd;
  }
  if (msd > 60 && msd < 60 * 60) {
    second = msd % 60;
    min = (msd - second) / 60;
    second = second;
    min = min;
  } else if (msd >= 60 * 60 && msd < 60 * 60 * 24) {
    second = msd % 60;
    min = ((msd - second) % 3600) / 60;
    hour = (msd - second - min * 60) / 3600;
  } else {
    second = msd % 60;
    min = ((msd - second) % (60 * 60)) / 60;
    hour = ((msd - second - min * 60) % (60 * 60 * 24)) / (60 * 60);
    day = (msd - second - min * 60 - hour * 60 * 60) / (60 * 60 * 24);
  }

  return {
    day,
    hour,
    min,
    second,
  };
}
function dateFormat(date: any, format: string) {
  let result = date;
  switch (format) {
    case "day":
      result = formatToDay(result);
      break;
    case "hour":
      result = formatToHour(result);
      break;
    case "min":
      result = formatToMin(result);
      break;
    case "second":
      result = formatToSecond(result);
      break;
    case "auto":
      result = formatToAuto(result);
      break;
    case "simple":
      result = formatToSimple(result);
      break;
  }

  return result;
}

function formatToDay(date: any) {
  const { day, hour, min, second } = date;
  return `${day}天${hour}小时${min}分钟${second}秒`;
}

function formatToHour(date: any) {
  const { hour, min, second } = date;
  return `${hour}小时${min}分钟${second}秒`;
}

function formatToMin(date: any) {
  const { min, second } = date;
  return `${min}分钟${second}秒`;
}

function formatToSecond(date: any) {
  const { second } = date;
  return `${second}秒`;
}

function formatToAuto(date: any) {
  const { day, hour, min, second } = date;
  if (day) {
    return formatToDay(date);
  }
  if (hour) {
    return formatToHour(date);
  }
  if (min) {
    return formatToMin(date);
  }
  return formatToSecond(date);
}
function formatToSimple(date: any) {
  const { day, hour, min, second } = date;
  if (day) {
    return `${day}天${hour}时`;
  }
  if (hour) {
    return `${hour}时${min}分`;
  }
  if (min) {
    return `${min}分${second}秒`;
  }
  return `${second}秒`;
}

export default secondsToDate;
