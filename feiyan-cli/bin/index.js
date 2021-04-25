#!/usr/bin/env node

const lib = require('feiyan-lib')
console.log(lib.add(1,3));
const argv = require('process').argv

console.log(argv);
const command = argv[2];
