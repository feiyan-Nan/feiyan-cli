#!/usr/bin/env node
import { Command } from 'commander';
import { printLogo } from './utils';

const program = new Command();

printLogo();
registerCommand();

function registerCommand() {
  program
    .command('init [projectName]')
    .description('init a new project')
    .action((projectName) => {
      console.log(`init a new project ${projectName}`);
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
