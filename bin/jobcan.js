#!/usr/bin/env node
'use strict';

const figlet = require("figlet");
const args = process.argv.slice(2);

figlet(args, function(err, data) {
  console.log(data);
});
