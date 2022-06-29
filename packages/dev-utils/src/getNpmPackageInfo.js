"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const child_process_1 = require("child_process");
exports.default = (packageName = '') => {
    if (!packageName) {
        try {
            // hack, It doesn't work in some users' environments without parameter packageName
            packageName = fs_extra_1.default.readJsonSync('./package.json').name;
        }
        catch (error) {
            return { error };
        }
    }
    // const hostNPM = getGlobalInfo().host.npm;
    const hostNPM = 'https://registry.npmjs.org/';
    const isWin32 = process.platform === 'win32';
    const npmCommander = isWin32 ? 'npm.cmd' : 'npm';
    const { stdout } = (0, child_process_1.spawnSync)(npmCommander, [
        'view',
        packageName,
        '--registry',
        hostNPM,
        '--json',
    ]);
    let info;
    try {
        info = JSON.parse(stdout.toString());
    }
    catch (error) {
        return { error };
    }
    return info;
};
