import shell from "shelljs";

// Copy files to release dir
shell.rm('-rf', 'dist/*');
shell.exec('cd client && npm run build');
shell.echo('Build API...')
shell.exec('tsc -p .');
shell.cp('-R', 'client/build', 'dist/');
shell.echo('End.')