#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const commander_1 = __importDefault(require("commander"));
const dev_utils_1 = require("@feiyan-cli/dev-utils");
const init_1 = __importDefault(require("@feiyan-cli/init"));
const utils_1 = require("./utils");
const locale_1 = __importDefault(require("./locale"));
const locales_1 = require("./locales");
(0, utils_1.printLogo)();
registerCommand();
console.log('hahh-helloddd');
const VALID_SUBCOMMANDS = ['init', 'locale'];
function registerCommand() {
    commander_1.default
        .name('feiyan')
        .usage('[commands] [options]')
        .arguments('<cmd>')
        .action((cmd) => {
        if (!VALID_SUBCOMMANDS.includes(cmd)) {
            dev_utils_1.print.error('arco', 'Invalid command...');
            commander_1.default.help();
        }
    });
    commander_1.default
        .command('init [projectName]')
        .description('init a new project')
        .action((projectName) => {
        console.log(`init a new project ${projectName}`);
        (0, init_1.default)();
    });
    /**
     * 检测当前版本是不是最新版本
     */
    commander_1.default.option('-v, --version', locale_1.default.CMD_DES_VERSION, () => __awaiter(this, void 0, void 0, function* () {
        const { version } = require('../package.json');
        (0, dev_utils_1.print)(chalk_1.default.green(locale_1.default.PREFIX_CURRENT_VERSION), version);
        const latestVersion = yield (0, utils_1.fetchLatestVersion)();
        if (latestVersion) {
            (0, dev_utils_1.print)();
            if (latestVersion !== version) {
                dev_utils_1.print.warn(`${locale_1.default.PREFIX_LATEST_VERSION}${latestVersion}`);
                dev_utils_1.print.warn(locale_1.default.TIP_VERSION_UPDATE);
            }
            else {
                (0, dev_utils_1.print)(chalk_1.default.cyan(locale_1.default.TIP_VERSION_ALREADY_LATEST));
            }
        }
    }));
    // feiyan locale -s 切换语言
    // feiyan locale
    commander_1.default
        .command('locale')
        .description(locale_1.default.CMD_DES_LOCALE)
        .option('-s, --switch', locale_1.default.TIP_LOCALE_SWITCH)
        .action(({ switch: sw }) => {
        if (sw) {
            console.log(sw, process.cwd());
            (0, locales_1.switchLocale)();
        }
        else {
            (0, locales_1.printLocale)();
        }
    });
    commander_1.default.on('--help', function () {
        dev_utils_1.print.divider();
        (0, dev_utils_1.print)(locale_1.default.TIP_SHOW_HELP);
        (0, dev_utils_1.print)('Examples:');
        (0, dev_utils_1.print)('  $ feiyan sync --screenshot');
        (0, dev_utils_1.print)('  $ feiyan group --id 1');
        dev_utils_1.print.divider();
    });
}
// console.log(process.argv, 'process.argv');
commander_1.default.parse(process.argv);
// if (process.argv[2] !== 'env' && checkEnv() === false) {
//   switchEnv()
//     .then(() => {
//       program.parse(process.argv);
//     })
//     .catch((err) => {
//       print.error(err);
//       process.exit(0);
//     });
// } else {
//   program.parse(process.argv);
// }
