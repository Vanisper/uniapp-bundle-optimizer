"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniJsonPlugin = void 0;
const path_1 = __importDefault(require("path"));
const json_1 = require("../../json");
const preprocess_1 = require("../../preprocess");
const utils_1 = require("../utils");
function uniJsonPlugin() {
    return {
        name: 'uni:json',
        enforce: 'pre',
        transform(code, id) {
            if (path_1.default.extname((0, utils_1.parseVueRequest)(id).filename) !== '.json') {
                return;
            }
            return {
                code: JSON.stringify((0, json_1.parseJson)((0, preprocess_1.preJson)(code)), null, 2),
                map: null,
            };
        },
    };
}
exports.uniJsonPlugin = uniJsonPlugin;
