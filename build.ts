import shell from "shelljs";
// var shell = require('shelljs');

// Copy files to release dir
shell.rm('-rf', 'dist/*');
shell.exec('cd client && npm run build');
shell.exec('tsc -p .');
shell.cp('-R', 'client/build', 'dist/');