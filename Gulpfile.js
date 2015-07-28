/*
Test gulp-codo plug-in in a Gulpfile.
This file is also used to generate this project's README.txt
for the npm package.
*/
var gulp = require('gulp'),
 replace = require('gulp-replace'),
      fs = require('fs'),
    codo = require('./');

var removeMarkdown = require('gulp-remove-markdown');
var readme = 'README';
var md = '.markdown';
var txt = '.txt';

gulp.task('test', function() {
  return gulp.src('*.coffee')
  .pipe(codo(
    'Greeter',
    'Greeter documentation',
    'greeter.md'));
});

gulp.task('readme', function() {
  return gulp.src(readme + md)
  .pipe(removeMarkdown())
  .pipe(replace(/\`js/g, ''))
  .pipe(replace(/\`/g, ''))
  .pipe(gulp.dest('.'));
});

gulp.task('clean', function() {
  if(fs.existsSync(readme + txt))
    fs.unlinkSync('README.txt');
});

gulp.task('default', ['test'], function(){});
