## How module works
- Each javascript file in node is treated as a separate module.
- NodeJS uses the CommonJS module system require().exports or module.exports;
- ES module system is used in browsers: import/export
- There have been attempts to bring ES modules to node.js(.mjs).

require('test-module');

## What happens when we require() a modules
Resolving and loading
Wrapping
Execution
Returning Exports
Caching

How does node know which type of modules to import:
* core module: require('http');
* developer moduels: require('./lib/controller');
* 3rd party modules (from NPM): require('express');

Path resolving: how node decides which module to load
1. Start with core module
2. If beigs with "./" or "../" --> try to laod developer module
3. If no file --> try to find file with index.js in it.
4. Else --> Go to node_modules/ and try to find modules there.
5. If not in modules, throw error.


## Wrapping
- Passes exports, require ,module, _ _filename, _ _dirname
- This gives developers access to the
- require: function to require modules
- module: reference to current modules
- exports: a reference to module.exports used to export object from a module
- _ _ filename: absolute path fo the current modules' file
- _ _ dirname; directory name of the current module

## Execution

- Executed by nodeJS runtime .

## Returning Exports:
- require function returns exports of the require module;
- module.exports is the return object (important!);
- Use module.exports to export one single variable eg one class or one function (module.exports = Calculator)
- Use exports to export multiple named varaibles (exports.add = (a,b) => a + b)
- This is how we import data from one module into another;

## Caching
- If you require the same module multiple times
- In subsequent calls, result are received from cache. 
