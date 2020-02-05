import shell from "shelljs";
// var shell = require('shelljs');

// Copy files to release dir
shell.rm('-rf', 'dist/*');
shell.exec('tsc -p .');
shell.exec('cd client && yarn build');
shell.cp('-R', 'client/build', 'dist/');