$(function () {
  console.log('hello');
  let $carouselList = $('#carousel').find('ul');
  let $carouselControls = $('#carousel').find('button');
  let $carouselIndicators = $('.btn-wrapper').find("button");

  const imgCount = [2, 3, 4, 0, 1];

  const manageList = () => {
    cloneItems();
    // setInterval(changeSlide, 4000);
    addSlideControlsEventListener();
    addIndicatorsEventListener();
  };

  const cloneItems = () => {
    let $li_template = $carouselList.find('li');
    for (let i = 0; i < 5; i++) {
      let $li = $li_template.clone();
      $li.find('img').attr('src', `img/pic_${i}.jpg`);
      $carouselList.append($li);
    }
    $li_template.remove();
  };

  const addSlideControlsEventListener = () => {
    $carouselControls.on('click', 'i', (e) => {
      direction = $(e.currentTarget).attr('class').split('-').slice(-1)[0];
      changeSlide(direction);
    });
  };

  const addIndicatorsEventListener = () => {
    console.log($carouselIndicators);
    $carouselIndicators.on("mouseenter", (e) => {
      $(e.currentTarget).css("transform", "scale(1.3)");
    });
    $carouselIndicators.on("mouseleave", (e) => {
      $(e.currentTarget).css("transform", "scale(1)");
    });
    $carouselIndicators.on("click", (e) => {
      let img_ix = $(e.currentTarget).index();
      let imgCountPosition = imgCount.indexOf(img_ix)
      for (let i=0; i<imgCountPosition; i++) {
        moveSlide("right", 500);
      }
      console.log();
    });
  };


  const changeSlide = (direction, speed=500) => {
    const directionValue = (direction == "left") ? 400 : -400;

    $carouselList.animate({
      marginLeft: directionValue
    }, speed, function () {
      moveSlide(direction);
    });
  };

  const moveSlide = (direction) => {
    let $firstItem = $carouselList.find('li:first');
    let $lastItem = $carouselList.find('li:last');

    $carouselIndicators.eq(imgCount[0]).removeClass("active"); //remove "active" class

    if (direction == "left") {
      $firstItem.before($lastItem);
      imgCount.unshift(imgCount.pop());
    } else {
      $lastItem.after($firstItem);
      imgCount.push(imgCount.shift());
    }
    $carouselIndicators.eq(imgCount[0]).addClass("active"); //add "active" class

    $carouselList.css({
      marginLeft: 0
    });

    // const img_src = $carouselList.find('img').eq(2).attr('src');
    // const img_ix = img_src.match(/_(\d)./)[1];
  };

  manageList();
});