'use strict';
var gutil = require('gulp-util'),
  through = require('through2'),
     exec = require('child_process').exec;

function invokeCodo(file, opts, cb) {
  var options = '';
  if(opts.hasOwnProperty('name')) options += ' --name "' + opts.name + '"';
  if(opts.hasOwnProperty('title')) options += ' --title "' + opts.title + '"';
  if(opts.hasOwnProperty('readme')) options += ' --readme ' + opts.readme;
  if(opts.hasOwnProperty('dir')) options += ' --output ' + opts.dir;
  return cb(null, exec('codo ' + options, function(){}));
}

module.exports = function(options) {
  return through.obj(function(file, enc, cb) {
    if(file.isNull()) {
      cb(null);
      return;
    }

    if(file.isStream()) {
      cb(new gutil.PluginError('gulp-codo', 'Streaming not supported'));
      return;
    }

    invokeCodo(file.path, options, function(err) {
      if(err) {
        cb(new gutil.PluginError('gulp-codo', err, {fileName: file.path}));
        return;
      }
      cb(null);
    });
  });
};
