// this file isn't transpiled, so must use CommonJS and ES5

// register babel to transpile before our tests run
require('babel-register');

// disable webpack features that mocha doesn't understand
//tell mocha if it sees an import css, treat it as an empty function
require.extensions['.css' ] = function() {};
