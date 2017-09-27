var os = require('os');
var TimeTools = require('./TimeTools');

function getOSinfo () {
  var release = os.release();
  var cpu = os.cpus()[0]['model'];
  var uptime = os.uptime();
  var userInfo = os.userInfo();

  //   var type = os.type()
  //   if (type === 'Darwin') {
  //     type = 'OSX'
  //   } else if (type === 'Windows_NT') {
  //     type = 'Windows'
  //   }

  var type = os.type() === 'Darwin' ? 'OSX' :
    os.type() === 'Windows_NT' ? 'Windows' :
      os.type();

  console.log('System: ', type);
  console.log('Release: ', release);
  console.log('CPU: ' + cpu);
//   console.log('Uptime: ~' + (uptime / 60).toFixed(0) + ' min');
  console.log('Uptime: ' + TimeTools.print(uptime));
  console.log('User name: ', userInfo.username);
  console.log('Home dir: ', userInfo.homedir);
}

// getOSinfo();

exports.print = getOSinfo;
