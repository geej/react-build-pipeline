#!/usr/bin/env node

const Path = require('path');
const exec = require('child_process').exec;

const cwd = process.cwd();
const entryPoint = process.argv[2];

if (!entryPoint) {
  console.error('An entry point must be provided');
  process.exit(1);
}

console.log(__dirname);
const lint = exec(`cd ${ Path.join(__dirname, '..') }; npm run eslint -- ${ Path.join(cwd, entryPoint) } -c ${ Path.join(__dirname, '..', '.eslintrc') }`);
lint.stdout.on('data', (data) => console.log(data));