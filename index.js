'use strict';
var gutil = require('gulp-util'),
  through = require('through2'),
     exec = require('child_process').exec;

function invokeCodo(file, name, title, readme, dir, cb) {
  var options = '';
  if(name != null) options += ' --name "' + name + '"';
  if(title != null) options += ' --title "' + title + '"';
  if(readme != null) options += ' --readme ' + readme;
  if(dir != null) options += ' --output ' + dir;
  return cb(null, exec('codo ' + file + options, function(){}));
}

module.exports = function(name, title, readme, dir) {
  return through.obj(function(file, enc, cb) {
    if(file.isNull()) {
      cb(null, file);
      return;
    }

    if(file.isStream()) {
      cb(new gutil.PluginError('gulp-codo', 'Streaming not supported'));
      return;
    }

    invokeCodo(file.path, name, title, readme, dir, function(err, data) {
      if(err) {
        cb(new gutil.PluginError('gulp-codo', err, {fileName: file.path}));
        return;
      }
      file.contents = new Buffer(data);
      cb(null, file);
    });
  });
};
