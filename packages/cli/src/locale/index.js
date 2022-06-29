"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dev_utils_1 = require("@feiyan-cli/dev-utils");
const zh_CN_1 = __importDefault(require("./zh-CN"));
const en_US_1 = __importDefault(require("./en-US"));
// @ts-ignore
exports.default = (0, dev_utils_1.getLocale)() === 'zh-CN' ? zh_CN_1.default : en_US_1.default;
