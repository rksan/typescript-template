(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/*! sample v0.0.1 @licence MIT @author (c) 2023 rksan */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample = void 0;
const lib_1 = __importDefault(require("./lib"));
const sample = (args) => {
    return lib_1.default.fn(args);
};
exports.sample = sample;

},{"./lib":2}],2:[function(require,module,exports){
"use strict";
/*! sample */
const lib = {
    fn: (args) => {
        return true;
    },
};
module.exports = lib;

},{}]},{},[1]);
