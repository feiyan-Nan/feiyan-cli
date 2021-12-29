#!/usr/bin/env node
import chalk from 'chalk';
import program from 'commander';
import { fetchLatestVersion, printLogo } from './utils';
import { print } from '@feiyan-cli/dev-utils';
import init from '@feiyan-cli/init';
import locale from './locale';
import { printLocale, switchLocale } from './locales';

printLogo();
registerCommand();

function registerCommand() {
  program
    .command('init [projectName]')
    .description('init a new project')
    .action((projectName) => {
      console.log(`init a new project ${projectName}`);
      init();
    });

  /**
   * 版本
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

  // program
  //   .command('env')
  //   .description(locale.CMD_DES_ENV)
  //   .option('-s, --switch', locale.TIP_ENV_SWITCH)
  //   .action(({ switch: sw }) => {
  //     console.log(`switch env ${sw}`);
  //   });

  // feiyan locale -s 切换语言
  // feiyan locale
  program
    .command('locale')
    .description(locale.CMD_DES_LOCALE)
    .option('-s, --switch', locale.TIP_LOCALE_SWITCH)
    .action(({ switch: sw }) => {
      console.log(sw);
      if (sw) {
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
