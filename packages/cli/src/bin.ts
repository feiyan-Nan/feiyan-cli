#!/usr/bin/env node
import { Command } from 'commander';
import { printLogo } from './utils';

const program = new Command();
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

registerCommand();
printLogo();

function registerCommand() {}

console.log('Hello world!');
