"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
function print(color, ...args) {
    if (args.length > 1) {
        log(chalk_1.default[`bg${color.replace(/^\w/, (w) => w.toUpperCase())}`](` ${args[0]} `), chalk_1.default[color](args.slice(1)));
    }
    else {
        log(chalk_1.default[color](...args));
    }
}
console.log('ddd');
function log(...args) {
    console.log(...args);
}
log.info = print.bind(null, 'gray');
log.warn = print.bind(null, 'yellow');
log.error = print.bind(null, 'red');
log.success = print.bind(null, 'green');
log.chalk = chalk_1.default;
/**
 * Print divider
 * @param {'info' | 'warn' | 'success' | 'error'} level
 */
log.divider = (level = 'info') => {
    const logger = log[level] || log.info;
    logger('---------------------------------------------------------------------------------------');
};
exports.default = log;
