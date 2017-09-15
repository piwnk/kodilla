$(function () {
  console.log('hello');
  manageList();
});
var $carouselList = $('#carousel').find('ul');
const manageList = () => {
  cloneItems();
  //   addSlideControlsEL()
  setInterval(changeSlide, 4000);
  addSlideControlsEventListener();
};

const cloneItems = () => {
  let $carouselList = $('#carousel').find('ul');
  $li_template = $carouselList.find('li');
  for (let i = 0; i < 5; i++) {
    $li = $li_template.clone();
    $li.find('img').attr('src', `img/pic_${i}.jpg`);
    $carouselList.append($li);
  }
  $li_template.remove();
};

const addSlideControlsEventListener = () => {
  let $carouselControls = $('#carousel').find('button');
  $carouselControls.on('click', 'i', (el) => {
    direction = $(el.currentTarget).attr('class').split('-').slice(-1)[0];
    changeSlide(direction);
  });
};

// is it better to use param or nested function or global carousel var?

const changeSlide = (direction) => {

  let $carouselList = $('#carousel').find('ul');
  let directionValue = (direction == "left") ? 400 : -400;
  let $indicators = $('btn-wrapper').find("button");
  console.log($indicators);
  $indicators.css("background-color", 'white');
  $indicators.css({width: 200});
  //WHY NOT WORKING


  const moveSlide = () => {
    let $firstItem = $carouselList.find('li:first');
    let $lastItem = $carouselList.find('li:last');

    console.log(direction);
   //  WHY INCORRECT
   //  (direction == "left") ? $firstItem.before($lastItem) : $lastItem.after($firstItem)
    if (direction == "left") {
      $firstItem.before($lastItem);
    } else {
      $lastItem.after($firstItem);
    }

    $carouselList.css({marginLeft: 0});
  };
  console.log(directionValue);

  $carouselList.animate({marginLeft: directionValue}, 500, moveSlide);
};