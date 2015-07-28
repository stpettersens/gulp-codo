/*
Test gulp-codo.
*/
'use strict';
var gulp = require('gulp'),
gulpfile = require('./Gulpfile.js'),
   gutil = require('gulp-util'),
    codo = require('./');

describe('Test gulp-codo plug-in', function() {
  it('Should create documentation for hello world (gulp)', function(done) {
    if(gulp.tasks.test) gulp.start();
    done();
  });
});
