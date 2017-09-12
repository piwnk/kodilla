var femaleNames = ['Kasia', 'Marysia', 'Kinga', 'Ania'];
var maleNames = ['Tomek', 'Piotrek', 'Łukasz', 'Marcin'];

maleNames.push('Andrzej'); //test

var allNames = femaleNames.concat(maleNames);

var newName1 = 'Marian';
var newName2 = 'Andrzej';

// console.log(allNames);

// IF test
if (!allNames.includes('Marian')) {
  allNames.push(newName1);
}

// TERNARY test
!allNames.includes('Andrzej') ? allNames.push(newName2) : console.log('Andrzej already in the array');

console.log(allNames);
