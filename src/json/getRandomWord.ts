"use strict";

/**
 * 生成随机数
 */

const getRandomWord = function (num: number) {
  let idvalue = "";
  const arr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  if (undefined !== num && num !== null) {
    for (let i = 0; i < num; i++) {
      idvalue += arr[Math.floor(Math.random() * 26)];
    }
  }
  return idvalue;
};

export default getRandomWord;
