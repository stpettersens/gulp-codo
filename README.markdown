### gulp-codo
> Gulp plug-in to generate documentation with [codo](https://github.com/coffeedoc/codo).

[![Build Status](https://travis-ci.org/stpettersens/gulp-codo.png?branch=master)](https://travis-ci.org/stpettersens/gulp-codo)
[![npm version](https://badge.fury.io/js/gulp-codo.svg)](http://npmjs.com/package/gulp-codo)
[![Dependency Status](https://david-dm.org/stpettersens/gulp-codo.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-codo) [![Development Dependency Status](https://david-dm.org/stpettersens/gulp-codo/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-codo#info=devDependencies)

##### Install:

First install [codo](https://www.npmjs.com/package/codo) globally:

	$ npm install -g codo

Then:

    $ npm install --save-dev gulp-codo

##### Usage:
```js
var gulp = require('gulp'),
    codo = require('gulp-codo');

gulp.task('doc', function () {
	return gulp.src('*.coffee')
	.pipe(codo({
		name: 'Greeter',
		title: 'Greeter documentation',
		readme: 'greeter.md'
	}));
});
```

##### Options:

* **options: Object** : Object containing any of the following options:
  * **name: string** : Project name for generated documenation (e.g. *Greeter*).
  * **title: string** : Title for generated documentation (e.g. *Greeter documentation*).
  * **readme: string**: : Readme to use for generated documentation (e.g. *greeter.md*).
  * **dir: string** : Output directory for documentation (e.g. *./doc*).
