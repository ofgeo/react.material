'use strict';

const childProcess = require('child_process');
const lerna = require('lerna/lib/Command');
const chalk = require('chalk');
const fs = require('fs-extra');
const paths = require('../config/paths');
const useYarn = fs.existsSync(paths.yarnLockFile);

process.on('unhandledRejection', err => {
    throw err;
});
console.log(chalk.white('Preparing deployment...\n'));



const install = childProcess.spawn(useYarn ? 'yarn' : 'npm run install', {});

install.stdout.on('data', (data) => {
    console.log(`${data}`);
});

install.on('close', (code) => {
    console.log(`${'...build success'}, run ${chalk.green.underline.bold('lerna publish')} to deploy.\n`);
});