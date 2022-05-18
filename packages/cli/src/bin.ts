#!/usr/bin/env node
import chalk from 'chalk';
import program from 'commander';
import { print } from '@feiyan-cli/dev-utils';
import init from '@feiyan-cli/init';
import { fetchLatestVersion, printLogo } from './utils';
import locale from './locale';
import { printLocale, switchLocale } from './locales';

printLogo();
registerCommand();
console.log('hahh-hello');
const VALID_SUBCOMMANDS = ['init', 'locale'];

function registerCommand() {
  program
    .name('feiyan')
    .usage('[commands] [options]')
    .arguments('<cmd>')
    .action((cmd) => {
      if (!VALID_SUBCOMMANDS.includes(cmd)) {
        print.error('arco', 'Invalid command...');
        program.help();
      }
    });

  program
    .command('init [projectName]')
    .description('init a new project')
    .action((projectName) => {
      console.log(`init a new project ${projectName}`);
      init();
    });

  /**
   * 检测当前版本是不是最新版本
   */
  program.option('-v, --version', locale.CMD_DES_VERSION, async () => {
    const { version } = require('../package.json');
    print(chalk.green(locale.PREFIX_CURRENT_VERSION), version);

    const latestVersion = await fetchLatestVersion();

    if (latestVersion) {
      print();
      if (latestVersion !== version) {
        print.warn(`${locale.PREFIX_LATEST_VERSION}${latestVersion}`);
        print.warn(locale.TIP_VERSION_UPDATE);
      } else {
        print(chalk.cyan(locale.TIP_VERSION_ALREADY_LATEST));
      }
    }
  });

  // feiyan locale -s 切换语言
  // feiyan locale
  program
    .command('locale')
    .description(locale.CMD_DES_LOCALE)
    .option('-s, --switch', locale.TIP_LOCALE_SWITCH)
    .action(({ switch: sw }) => {
      if (sw) {
        console.log(sw, process.cwd());
        switchLocale();
      } else {
        printLocale();
      }
    });

  program.on('--help', function () {
    print.divider();
    print(locale.TIP_SHOW_HELP);
    print('Examples:');
    print('  $ feiyan sync --screenshot');
    print('  $ feiyan group --id 1');
    print.divider();
  });
}

// console.log(process.argv, 'process.argv');

program.parse(process.argv);

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
