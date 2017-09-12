var buttons = document.getElementsByClassName('button');

// for (var i=0; i<buttons.length; i++) {
//   console.log(buttons[i].innerHTML);
// }

// buttons.map(function (button) {
Array.from(buttons).map(function (button) {
// Array.prototype.map.call(buttons, function (button) {
// Array.prototype.slice.call(buttons).map(function (button) {
   // console.log(button.innerHTML);
   console.log(button.innerText);
   alert(button.innerText);
})
