#!/usr/bin/env node

const { argv } = require('yargs');

const months = new Map([
  [1, 'JAN'],
  [2, 'FEB'],
  [3, 'MAR'],
  [4, 'APR'],
  [5, 'MAY'],
  [6, 'JUN'],
  [7, 'JUL'],
  [8, 'AUG'],
  [9, 'SEP'],
  [10, 'OCT'],
  [11, 'NOV'],
  [12, 'DEC']
]);

getCalender = (year, month) => {

  const heading =
    '*********************************CALENDER*******************************\n' +
    '                            [' + months.get(month) + ' ' + year + ']\n' +
    '************************************************************************\n';
  let calenderString = heading + '\n\tSUN\t|\tMON\t|\tTUE\t|\tWED\t|\tTHU\t|\tFRI\t|\tSAT\n';

  // months are 0-11 in javascript Date()
  month = month - 1
  let firstDay = (new Date(year, month)).getDay();
  const numberOfDaysInMonth = 32 - (new Date(year, month, 32)).getDate();

  let date = 0;
  // maximum 40 blocks
  for (let i = 0; i < 40; i++) {
    if ((i !== 0) && ((i) % 7 === 0))
      calenderString += '\n';

    if (firstDay > i) {
      calenderString += '\t \t|';
      continue;
    }

    if (numberOfDaysInMonth <= date) {
      break;
    }
    calenderString += '\t' + ++date + '\t|';
  }
  return calenderString;
};



help = () => {
  console.log('|************* CALENDER *************|\n'
    + '| -y => to specify year                    |\n'
    + '| -m => to specify month in numbers [1-12] |\n'
    + '\n-y -m options are mandatory to print calender');
};




if (argv.h) {
  return help();
}

if (!(argv.y && argv.m)) {
  throw new Error('please provide year and month with opotions -y and -m');
}

if (isNaN(Number(argv.y)) || isNaN(Number(argv.m))) {
  throw new Error('please provide year and month as number');
}

const calender = getCalender(argv.y, argv.m);

console.log(calender);