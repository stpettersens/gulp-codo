### gulp-codo
> Gulp plug-in to generate documentation with [codo](https://github.com/coffeedoc/codo).

[![Build Status](https://travis-ci.org/stpettersens/gulp-remove-markdown.png?branch=master)](https://travis-ci.org/stpettersens/gulp-remove-markdown)
[![npm version](https://badge.fury.io/js/gulp-remove-markdown.svg)](http://npmjs.com/package/gulp-remove-markdown)
[![Dependency Status](https://david-dm.org/stpettersens/gulp-remove-markdown.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-remove-markdown) [![Development Dependency Status](https://david-dm.org/stpettersens/gulp-remove-markdown/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-remove-markdown#info=devDependencies)

##### Install:

First install codo globally:

	$ npm install -g codo

Then:

    $ npm install --save-dev gulp-codo

##### Usage:
```js
var gulp = require('gulp'),
    codo = require('gulp-codo');

gulp.task('doc', function () {
	return gulp.src('*.coffee')
	.pipe(codo()) // codo(name, title, readme, dir)
});
```

##### Options:

* **name: string** : Project name for generated documenation (e.g. *Greeter*).
* **title: string** : Title for generated documentation (e.g. *Greeter documentation*).
* **readme: string**: : Readme to use for generated documentation (e.g. *greeter.md*).
* **dir: string** : Output directory for documentation (e.g. *./doc*).

##### Attribution:

* This plug-in uses [codo](https://github.com/coffeedoc/codo)
