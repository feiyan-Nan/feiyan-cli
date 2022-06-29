"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_locale_1 = require("os-locale");
const getGlobalInfo_1 = __importDefault(require("./getGlobalInfo"));
function getLocale() {
    const { locale } = (0, getGlobalInfo_1.default)();
    return locale && locale !== 'system' ? locale : (0, os_locale_1.sync)();
}
exports.default = getLocale;
