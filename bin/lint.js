#!/usr/bin/env node

const exec = require('child_process').exec;

const entryPoint = process.argv[2];
if (!entryPoint) {
    console.error('An entry point must be provided');
    process.exit(1);
}

const lint = exec(`npm run eslint -- ${ entryPoint }`);
lint.stdout.on('data', (data) => console.log(data));