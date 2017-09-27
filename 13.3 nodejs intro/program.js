var OSinfo = require('./OSInfo');


process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
  var input = process.stdin.read();
  if (input !== null) {
    //  process.stdout.write(input)
    var instruction = input.toString().trim();
    //  if (instruction === '/exit') {
    //    process.stdout.write('Quiting app!\n')
    //    process.exit()
    //  } else {
    //    process.stderr.write('Wrong instruction!\n')
    //  }

    if (Object.keys(process).includes(instruction.slice(1, instruction.length))) {
      console.log(process[instruction]);
    } else {
      console.log('Not process key');
      switch (instruction) {
        //   case '/node_version':
        //     process.stdout.write(process.version + '\n')
        //     break
        //   case '/cpuUsage':
        //     process.stdout.write(process.cpuUsage.toString().trim())
        //     process.stdout.write('\n')
        //     break
        //   case '/env':
        //     process.stdout.write(process.env)
        //     process.stdout.write('\n')
        //     break
        //   case '/title':
        //     process.stdout.write(process.title)
        //     process.stdout.write('\n')
        //     break
        //   case '/pid':
        //     process.stdout.write(process.pid.toString().trim())
        //     process.stdout.write('\n')
        //     break

        case '/getOSinfo':
         //  getOSinfo();
         OSinfo.print();
          break;

        case '/exit':
          process.stdout.write('Quiting app!\n');
          process.exit();

        default:
          process.stdout.write('Wrong instruction!\n');
      }
    }}
});
