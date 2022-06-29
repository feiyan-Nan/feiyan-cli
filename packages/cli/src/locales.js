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
exports.switchLocale = exports.printLocale = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const locale_1 = __importDefault(require("./locale"));
const dev_utils_1 = require("@feiyan-cli/dev-utils");
function printLocale() {
    const { locale: currentLocale } = (0, dev_utils_1.getGlobalInfo)();
    dev_utils_1.print.info(`${locale_1.default.PREFIX_CURRENT_LOCALE}: ${currentLocale === 'zh-CN'
        ? locale_1.default.TIP_LOCALE_ZH_CN
        : currentLocale === 'en-US'
            ? locale_1.default.TIP_LOCALE_EN_US
            : locale_1.default.TIP_LOCALE_SYSTEM}`);
}
exports.printLocale = printLocale;
function switchLocale() {
    return __awaiter(this, void 0, void 0, function* () {
        const { locale: nextLocale } = yield inquirer_1.default.prompt({
            type: 'list',
            name: 'locale',
            message: locale_1.default.TIP_SELECT_LOCALE,
            choices: [
                { name: locale_1.default.TIP_LOCALE_EN_US, value: 'en-US' },
                { name: locale_1.default.TIP_LOCALE_ZH_CN, value: 'zh-CN' },
                { name: locale_1.default.TIP_LOCALE_SYSTEM, value: 'system' },
            ],
        });
        (0, dev_utils_1.writeGlobalInfo)({ locale: nextLocale });
    });
}
exports.switchLocale = switchLocale;
