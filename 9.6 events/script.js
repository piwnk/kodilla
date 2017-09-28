var list = document.getElementById('list');
var button = document.getElementById('addElem');

var item, lastEntry, counter;

// lastEntry = Array.from(document.getElementsByTagName('li')).slice(-1)[0];
// counter = lastEntry.innerText.split(' ').slice(-1)[0];

button.addEventListener("click", function () {
   lastEntry = Array.from(document.getElementsByTagName('li')).slice(-1)[0];
   counter = lastEntry.innerText.split(' ').slice(-1)[0];

   item = document.createElement('li');
   item.innerText = "item " + counter++;
   
   list.appendChild(item);
});