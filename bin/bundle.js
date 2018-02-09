#!/usr/bin/env node

const Path = require('path');
const exec = require('child_process').exec;

const lint = exec(`cd ${ Path.join(__dirname, '..') }; BASE_PATH=${ process.cwd() } npm run webpack`);
lint.stdout.on('data', (data) => console.log(data));