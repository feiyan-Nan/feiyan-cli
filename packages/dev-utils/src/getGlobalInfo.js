"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const constant_1 = require("./constant");
function getGlobalInfo() {
    if (fs_extra_1.default.existsSync(constant_1.PATH_CLI_GLOBAL_INFO)) {
        return fs_extra_1.default.readJsonSync(constant_1.PATH_CLI_GLOBAL_INFO);
    }
    return {};
}
exports.default = getGlobalInfo;
