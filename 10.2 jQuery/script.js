$(function(){
   var carousel = $('#carousel');
   carousel.find('img').each(function(index, element) {
      $(element).attr('src', `http://lorempixel.com/80${index}/60${index}/`);
   });
});