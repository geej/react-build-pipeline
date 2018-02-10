#!/usr/bin/env node

const Path = require('path');
const exec = require('child_process').exec;

const lint = exec(`cd ${ Path.join(__dirname, '..') }; BASE_PATH=${ process.cwd() } npm run server`);
lint.stdout.on('data', (data) => console.log(data));
lint.stderr.on('data', (data) => console.log(data));