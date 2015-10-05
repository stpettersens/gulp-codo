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
	return gulp.src('*.coffee', {read: false})
	.pipe(codo({
		name: 'Greeter',
		title: 'Greeter documentation',
		readme: 'greeter.md',
		extra: 'LICENSE.md'
	}));
});
```

##### Options:

* **options: Object** : Object containing any of the following options:
  * **name: string** : Project name for generated documenation (e.g. *Greeter*).
  * **title: string** : Title for generated documentation (e.g. *Greeter documentation*).
  * **readme: string**: : Readme to use for generated documentation (e.g. *greeter.md*).
  * **dir: string** : Output directory for documentation (e.g. *./doc*).
	* **theme: string** : The theme to be used (e.g. *default*).
	* **undocumented: boolean** : List undocumented objects
	* **closure: boolean** : Try to parse closure-like block comments
	* **private: boolean** : Show privates
	* **verbose: boolean** : Show parsing errors
	* **extra: string or Array** : Add extra files (e.g. *['LICENSE.md']*)

##### Authors

[Sam Saint-Pettersen](https://github.com/stpettersens), [Joe Hildebrand](https://github.com/hildjj)

#### License

[MIT](https://opensource.org/licenses/MIT)
