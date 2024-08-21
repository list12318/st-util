"use strict";
import { Base64 } from "js-base64";

/**
 * encryption
 */

const encode = function (code: string) {
  return Base64.encode(code);
};

const decode = function (code: string) {
  return Base64.decode(code);
};

const encryption = {
  encode,
  decode,
};

export default encryption;
