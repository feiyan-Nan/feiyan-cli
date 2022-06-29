"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchLatestVersion = exports.printLogo = void 0;
const chalk_1 = __importDefault(require("chalk"));
const dev_utils_1 = require("@feiyan-cli/dev-utils");
const FEIYAN_CLi_PACKAGE_NAME = '@feiyan-cli/cli';
function printLogo() {
    const { version } = require('../package.json');
    (0, dev_utils_1.print)(chalk_1.default.hex('#165dff').bold(`
      ███████╗ ███████╗ ██╗ ██╗   ██╗  █████╗  ███╗   ██╗
      ██╔════╝ ██╔════╝ ██║ ╚██╗ ██╔╝ ██╔══██╗ ████╗  ██║
      █████╗   █████╗   ██║  ╚████╔╝  ███████║ ██╔██╗ ██║
      ██╔══╝   ██╔══╝   ██║   ╚██╔╝   ██╔══██║ ██║╚██╗██║
      ██║      ███████╗ ██║    ██║    ██║  ██║ ██║ ╚████║
      ╚═╝      ╚══════╝ ╚═╝    ╚═╝    ╚═╝  ╚═╝ ╚═╝  ╚═══╝

                                                   v${version}
    `));
}
exports.printLogo = printLogo;
function fetchLatestVersion() {
    try {
        const info = (0, dev_utils_1.getNpmPackageInfo)(FEIYAN_CLi_PACKAGE_NAME);
        const { latest: lastVersion } = info['dist-tags'];
        return lastVersion;
    }
    catch (e) { }
    return null;
}
exports.fetchLatestVersion = fetchLatestVersion;
