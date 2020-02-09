import shell from "shelljs";

shell.rm('-rf', 'dist/*');
shell.exec('tsc -p .');