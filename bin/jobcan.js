#!/usr/bin/env node
'use strict';

const figlet = require("figlet");
const chalk = require("chalk");
const program = require('commander')
const args = process.argv.slice(2);

program
  .version('1.0.0', '-v, --version')

program.command('credentials')
  .description('manage credentials')
  .action(() =>
    console.log('TODO: show credentials')
  )

program.parse(process.argv)
