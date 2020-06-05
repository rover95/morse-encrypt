"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeByUnicode = exports.incodeByUnicode = exports.decode = exports.incode = undefined;

var _encrypt = require("./encrypt");

var _unicodeEncrypt = require("./unicodeEncrypt");

exports.incode = _encrypt.incode;
exports.decode = _encrypt.decode;
exports.incodeByUnicode = _unicodeEncrypt.incodeByUnicode;
exports.decodeByUnicode = _unicodeEncrypt.decodeByUnicode;