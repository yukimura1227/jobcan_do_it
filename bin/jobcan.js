#!/usr/bin/env node
'use strict';

const figlet = require("figlet");
const chalk = require("chalk");
const cli = require('cac')()
const args = process.argv.slice(2);

cli.command('credentials').action((options) => {
  figlet(options, function(err, data) {
    console.log(chalk.blue.bgWhite.bold(data));
  });
})

cli.help()
cli.parse()
