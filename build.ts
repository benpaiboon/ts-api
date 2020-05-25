import shell from "shelljs";

// Copy files to release dir
shell.rm('-rf', 'dist/*');
shell.exec('cd client && npm run build');
shell.echo('Building an API...')
shell.exec('tsc -p .');
shell.cp('-R', 'client/build', 'dist/web');
shell.echo('Compiled successfully.')