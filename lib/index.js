var os = require('os');
var exec = require('child_process').execFile;

var path = require('path');
var extractRaw;
var parseApk;
var parseOutput;

parseApk = function(filename, cb) {
  var exeName = null;
  if (os.type() === 'Darwin') {
      exeName = 'aapt-osx';
  } else if (os.type() === 'Linux') {
      exeName = 'aapt-linux';
  } else {
      throw new Error('Unknown OS!');
  }
  return exec(path.join(__dirname, ".." ,exeName), ['dump', 'badging', filename], {
    maxBuffer: 1024 * 1024 * 1024
  }, function(err, out) {
    if (err) {
      return cb(err);
    }
    return parseOutput(out, cb);
  });
};

parseApk.parseOutput = parseOutput;

module.exports = parseApk;
