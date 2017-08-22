const team = {
  'members': [{
    'name': 'Ruth Woods',
    'role': 'Founder, CEO'
  }, {
    'name': 'Timothy Reed',
    'role': 'Co-Founder, Developer'
  }, {
    'name': 'Victoria Valdez',
    'role': 'UI Designer'
  }, {
    'name': 'Beverly Little',
    'role': 'Data Scientist'
  }]
};

const quotes = [
  {'author': 'Dr. Seuss',
  'quote': "Don't cry because it's over, smile because it happened."},
  {'author': 'Oscar Wilde',
  'quote': 'Be yourself; everyone else is already taken.'},
  {'author': 'Frank Zappa',
  'quote': 'So many books, so little time.'},
  {'author': 'Mae West',
  'quote': 'You only live once, but if you do it right, once is enough.'}
];

// function addGallery () {
const addGallery = function addGallery () {
  var url, i;
  for (i = 0; i < 8; i++) {
    var picture = document.createElement('div');
    url = `http://lorempixel.com/400/30${i}/`;
    picture.style.backgroundImage = `url(${url})`;
    picture.className = 'picture';
    document.getElementById('gallery').appendChild(picture);
  }
};

// function addTeam () {
const addTeam = function () {
  var url, i;
  var members = team.members;
  var member;
  var desc = 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.';

  for (var i = 0; i < members.length; i++) {
    url = `http://lorempixel.com/400/50${i}/`;

    member = $('#team .member:first-child').clone();
    member.children('img').attr('src', url);
    member.children('img').attr('alt', `image-${i}`);
    member.children('h4').text(members[i].name);
    member.children('h6').text(members[i].role);
    member.children('p').text(desc);
    $('#team #members').append(member);
  }
  $('#team .member:first-child').remove();
};

const fillCarousel = function () {
  var itemTemplate = $('#quoteCarousel .item:first-child');
  var indicatorTemplate = $('#quoteCarousel li:first-child')
  var url;
  for (var i = 0; i < quotes.length; i++) {
    url = `http://lorempixel.com/600/80${i}/`;
    item = itemTemplate.clone();
    indicator = indicatorTemplate.clone();
    if (i === 0) {
       item.addClass('active');
       indicator.addClass('active');
    }
    if (i > 0) {
      item.removeClass('active');
      indicator.removeClass('active');
   }

    indicator.attr("data-slide-to", i);

    item.children('.photo').css('background-image', `url(${url})`);
    item.children('.quote').css('background-color', '#'+(Math.random()*0xFFFFFF<<0).toString(16));
    item.find('.quote-content').text(quotes[i].quote);
    item.find('.author').text(quotes[i].author);

    $('#quoteCarousel .carousel-indicators').append(indicator);
    $("#quoteCarousel .carousel-inner").append(item);
  }
  itemTemplate.remove();
  indicatorTemplate.remove();
};

$(document).ready(function () {
  addGallery();
  addTeam();
  fillCarousel();
});
