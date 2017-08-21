$(document).ready(function () {
   var url;

   for (var i=0; i<8; i++) {
      var picture = document.createElement("DIV");
      url = `http://lorempixel.com/400/30${i}/`;
      picture.style.backgroundImage = `url(${url})`;
      picture.className = "picture";
      document.getElementById("gallery").appendChild(picture);
   }
});