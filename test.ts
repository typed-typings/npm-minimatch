/// <reference path="bundle.d.ts" />

import minimatch = require('minimatch');

const m = new minimatch.Minimatch('*.js');

console.log(m.match('foo.js'));
console.log(minimatch('foobar.js', '*.js', { matchBase: true }));
