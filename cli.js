#!/usr/bin/env node

const { argv } = require('yargs');

const { getCalender, help } = require('./calender');

if (argv.h) {
  return help();
}

if (!(argv.y && argv.m)) {
  throw new Error('please provide year and month with opotions -y and -m');
}

const calender = getCalender(argv.y, argv.m);

console.log(calender);