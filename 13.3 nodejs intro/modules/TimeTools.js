function makeHumanReadable(seconds) {
   var hours, minutes;

   hours = Math.floor(seconds /3600);
   seconds -= hours * 3600;
   minutes = Math.floor(seconds /60);
   seconds = Math.floor(seconds - minutes * 60);
   
   result = `${minutes} min. ${seconds} sek.`;

   return hours > 0 ? `${hours} godz. ${result}` : result;
}

// console.log(makeHumanReadable(3700));
// console.log(makeHumanReadable(125));

exports.print = makeHumanReadable;