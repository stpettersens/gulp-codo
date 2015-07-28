/*
Test gulp-remove-markdown.
*/
'use strict';
var assert = require('assert'),
      gulp = require('gulp'),
        fs = require('fs'),
  gulpfile = require('./Gulpfile.js'),
     gutil = require('gulp-util'),
      codo = require('./');

describe('Test gulp-codo plug-in', function() {
  it('Should create documentation for hello world (stream)', function(done) {
    var stream = codo();
    var docExists = false;

    stream.once('data', function(file) {
      assert.equal(file.relative, 'helloworld.coffee');
      if(fs.existsSync('doc')) docExists = true;
      assert.equal(docExists, true);
    });

    stream.on('end', done);

    stream.write(new gutil.File({
      path: 'helloworld.coffee',
      contents: new Buffer('#\n# Hello World\n#\nhelloworld ->\nconsole.log("Hello World!")\n')
    }));

    stream.end();
  });

  it('Should create documentation for hello world (gulp)', function(done) {
    if(gulp.tasks.test) gulp.start();
    done();
  });
});
