### gulp-remove-markdown
> Gulp plug-in to generate documentation with [codo](https://github.com/coffeedoc/codo).

[![Build Status](https://travis-ci.org/stpettersens/gulp-remove-markdown.png?branch=master)](https://travis-ci.org/stpettersens/gulp-remove-markdown)
[![npm version](https://badge.fury.io/js/gulp-remove-markdown.svg)](http://npmjs.com/package/gulp-remove-markdown)
[![Dependency Status](https://david-dm.org/stpettersens/gulp-remove-markdown.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-remove-markdown) [![Development Dependency Status](https://david-dm.org/stpettersens/gulp-remove-markdown/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-remove-markdown#info=devDependencies)

##### Install:

    $ npm install --save-dev gulp-codo

##### Usage:
```js
var gulp = require('gulp'),
    codo = require('gulp-codo');

gulp.task('doc', function () {
	return gulp.src('*.coffee')
	.pipe(codo('./doc')) // codo() defaults to './doc'
	.pipe(gulp.dest('dist'));
});
```

<!--##### Options

* **ext: string** : File extension to use for Markdown stripped output.
* **options: Object** : Options [supported by remove-markdown](http://bit.ly/1LrOKG4).-->

##### Attribution

* This plug-in uses [codo](https://github.com/coffeedoc/codo)
