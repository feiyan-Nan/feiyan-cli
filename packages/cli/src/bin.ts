#!/usr/bin/env node
import { Command } from 'commander';
import { printLogo } from './utils';
import { print } from '@feiyan-cli/dev-utils';
import init from '@feiyan-cli/init';
import locale from './locale';
const program = new Command();

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

  program.on('--help', function () {
    print.divider();
    print(locale.TIP_SHOW_HELP);
    print('Examples:');
    print('  $ feiyan sync --screenshot');
    print('  $ feiyan group --id 1');
    print.divider();
  });
}

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
