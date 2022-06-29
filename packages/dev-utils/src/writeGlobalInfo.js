"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const constant_1 = require("./constant");
function writeGlobalInfo(info) {
    let originalInfo = {};
    try {
        originalInfo = fs_extra_1.default.readJsonSync(constant_1.PATH_CLI_GLOBAL_INFO);
    }
    catch (err) { }
    fs_extra_1.default.writeJsonSync(constant_1.PATH_CLI_GLOBAL_INFO, Object.assign(Object.assign({}, originalInfo), info), { spaces: 2 });
}
exports.default = writeGlobalInfo;
