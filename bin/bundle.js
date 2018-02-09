#!/usr/bin/env node

const exec = require('child_process').exec;
const lint = exec(`npm run webpack`);
lint.stdout.on('data', (data) => console.log(data));