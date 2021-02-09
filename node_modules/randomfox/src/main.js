"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.customfox = exports.fox = void 0;
var foxy_json_1 = __importDefault(require("./foxy.json"));
function fox() {
    return foxy_json_1["default"].url + Math.floor((Math.random() * foxy_json_1["default"].length) + 1) + foxy_json_1["default"].suffix;
}
exports.fox = fox;
function customfox(urls) {
    return urls[Math.floor((Math.random() * urls.length))];
}
exports.customfox = customfox;
