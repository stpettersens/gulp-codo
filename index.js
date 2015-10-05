'use strict';
var gutil = require('gulp-util'),
  through = require('through2'),
     exec = require('child_process').exec;

function invokeCodo(files, opts, cb) {
  var options = 'codo ';
  if(opts.hasOwnProperty('name')) options += ' --name "' + opts.name + '"';
  if(opts.hasOwnProperty('title')) options += ' --title "' + opts.title + '"';
  if(opts.hasOwnProperty('readme')) options += ' --readme ' + opts.readme;
  if(opts.hasOwnProperty('dir')) options += ' --output ' + opts.dir;
  if(opts.hasOwnProperty('theme')) options += ' --theme ' + opts.theme;
  if(opts.undocumented) options += ' --undocumented';
  if(opts.closure) options += ' --closure';
  if(opts.private) options += ' --private';
  if(opts.verbose) options += ' --verbose';
  options += ' ' + files.map(function(f){ return f.path; }).join(' ');
  if(opts.hasOwnProperty('extra')) {
    var extra = opts.extra;
    if (!Array.isArray(extra)) extra = [extra];
    options += ' - ' + extra.join(' ');
  }
  if(opts.verbose) gutil.log('codo cmd:', options);
  return exec(options, function(error, stdout, stderr) {
    if (stdout) { gutil.log('\n' + stdout); }
    if (stderr) { gutil.log('\n' + stderr); }
    cb(error);
  });
}

module.exports = function(options) {
  var files = [];
  return through.obj(function(file, enc, cb) {
    if(file.isStream()) {
      cb(new gutil.PluginError('gulp-codo', 'Streaming not supported'));
      return;
    }
    files.push(file);
    cb(null);
  }, function (cb) {
    invokeCodo(files, options, function(err) {
      if(err) {
        cb(new gutil.PluginError('gulp-codo', err, {fileName: file.path}));
        return;
      }
      cb(null);
    });
  });
};
