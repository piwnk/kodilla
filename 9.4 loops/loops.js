const drawTree = x => {
  let i = 1;
  let branches = [];
  while (i <= x) {
    branches.push(' '.repeat(x-i) + '*'.repeat(2*i-1));
    i++;
  }
  return console.log(branches.join('\n'));
};

drawTree(7);