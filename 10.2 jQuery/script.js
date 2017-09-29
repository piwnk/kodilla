$(function () {
   cloneDivs();
   addColor();
   addButtons();
   addListener();

});

const cloneDivs = () => {
   let $container = $('.container');
   let $div1 = $('.div1');
   let $div2 = $('.div2');
   for (let i=0; i<5; i+=1) {
      $container.append($div1.clone());
      $container.append($div2.clone());
   }
};

const addColor = () => {
   let $span = $("span");
   $span.each(function (index, element) {
      if (index % 2 === 0) {
         $(element).css('color', 'red');
      }
   });
};

const addButtons = () => {
   let $p = $("p");
   $p.each((i, e) => {
      // p.each(function(i, e) {
      // var button = '<button class="btn" data-tmp="' + i + '">Click me</button>';
      let button = `<button class="btn" data-tmp="${i}">Click me</button>`;
      $(e).append(button);
   });
};

const addListener = () => {
   $('button').click((e) => {
      alert($(e.currentTarget).attr('data-tmp'));
      // $('button').click(function () {
      //    alert($(this).attr('data-tmp'));
   });
};