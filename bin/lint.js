#!/usr/bin/env node

const Path = require('path');
const exec = require('child_process').exec;

const lint = exec(`cd ${ Path.join(__dirname, '..') }; npm run eslint -- ${ Path.join(process.cwd(), 'src') } -c ${ Path.join(__dirname, '..', '.eslintrc') }`);
lint.stdout.on('data', (data) => console.log(data));