/*
Test gulp-codo.
*/
'use strict';
var assert = require('assert'),
      gulp = require('gulp'),
	    fs = require('fs'),
  gulpfile = require('./Gulpfile.js'),
      codo = require('./');

describe('Test gulp-codo plug-in', function() {
  it('Should create documentation for hello world (gulp)', function(done) {
  	var docs = false;
    if(gulp.tasks.test) gulp.start();
    if(fs.existsSync('doc')) docs = true;
    assert.equal(docs, true);
    done();
  });
});
