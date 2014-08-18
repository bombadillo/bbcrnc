bbcrnc
=====

BBC Roman Numerals Converter

## Dependencies 

1. PHP 
2. Node.js (for Using Grunt)
3. Grunt-cli (for Using Grunt. Can be installed with Node Package Manager (npm) using `npm install -g grunt-cli`)

## Project Setup

The app can be run 'out of the box' by cloning the repository and setting up a server (local or remote) with a PHP instance available.

1. Use the Node Packager Manager (NPM) install command `npm install` within the root directory of _acvis_. This will install all the dependencies and packages that will be needed for the app.

## Automated Tasks

There are automated tasks to carry out repetitive operations. The plugins carrying out these tasks are:

- **JSHint**: JavaScript error checking.
- **Browserify**: Bundling JavaScript into one file.
- **Uglify**: Obfuscating and minifying JavaScript files.
- **LESS**:   Compiling LESS CSS files.
- **CSSMin**: Concatenating and minifying JavaScript files.
- **Watch**:  Watching for file changes and carrying out operations based on the changed file.

### Running Tasks

You can run these tasks by using the `grunt` command followed by the task name e.g.

`grunt jshint`

### Watch Task

We use the watch task to check for changes to less files so that the LESS is compiled to CSS and saved to a new file. The watch task is not used in any of the defined task cases.

### Default Tasks Case

If you use the `grunt` command without specifying a task, grunt will use the default task. This is currently set to run all of the tasks listed above with the exception of the watch command.

### Development Tasks Case

Use `grunt dev` to use this task case.

When developing we really only want to see the changes to our code and to check for errors. 

The tasks used within this case are:

- JSHint
- Browserify
- LESS
- CSSMin

We call the JSHint task for error/syntax checking, Browserify to bundle all our JavaScript into one file, LESS to compile our CSS and CSSMin to concatenate all our CSS into one file.

### Production Tasks Case

Use `grunt prod` to use this task case.

When getting our files ready for production we want to check for errors, compile our LESS code, and concatenate our JavaScript and CSS.  

The tasks used within this case are:

- JSHint
- Browserify
- Uglify
- LESS
- CSSMin

We call the JSHint task for error/syntax checking, Browserify to bundle all our JavaScript into one file, LESS to compile our CSS and CSSMin to concatenate all our CSS into one file.

### Testing

Tests are completed using QUnit. The test cases can be found in js/app.test.js and the tests can be viewed in test.html.

## License
MIT
