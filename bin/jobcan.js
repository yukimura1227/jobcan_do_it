#!/usr/bin/env node
'use strict';

const figlet = require("figlet");
const chalk = require("chalk");
const args = process.argv.slice(2);

figlet(args, function(err, data) {
  console.log(chalk.blue.bgRed.bold(data));
});
