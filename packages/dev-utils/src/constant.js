"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATH_CLI_GLOBAL_INFO = void 0;
const path_1 = __importDefault(require("path"));
exports.PATH_CLI_GLOBAL_INFO = path_1.default.resolve(require('os').homedir(), '.feiyan-cli.json');
