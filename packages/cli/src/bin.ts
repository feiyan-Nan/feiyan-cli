#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

console.log(process.argv, '123');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options, 'LLLL');
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);
