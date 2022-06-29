"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeGlobalInfo = exports.getGlobalInfo = exports.getNpmPackageInfo = exports.getLocale = exports.print = void 0;
var print_1 = require("./print");
Object.defineProperty(exports, "print", { enumerable: true, get: function () { return __importDefault(print_1).default; } });
var getLocale_1 = require("./getLocale");
Object.defineProperty(exports, "getLocale", { enumerable: true, get: function () { return __importDefault(getLocale_1).default; } });
var getNpmPackageInfo_1 = require("./getNpmPackageInfo");
Object.defineProperty(exports, "getNpmPackageInfo", { enumerable: true, get: function () { return __importDefault(getNpmPackageInfo_1).default; } });
var getGlobalInfo_1 = require("./getGlobalInfo");
Object.defineProperty(exports, "getGlobalInfo", { enumerable: true, get: function () { return __importDefault(getGlobalInfo_1).default; } });
var writeGlobalInfo_1 = require("./writeGlobalInfo");
Object.defineProperty(exports, "writeGlobalInfo", { enumerable: true, get: function () { return __importDefault(writeGlobalInfo_1).default; } });
