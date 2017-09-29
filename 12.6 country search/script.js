const euUrl = "https://restcountries.eu/rest/v1/name/";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/";
const countriesList = $("#countries");
const searchButton = $("#search");
const searchInput = $("#country-name");

const searchCountries = () => {
   let countryName = searchInput.val();
   if (!countryName.length) {
      countryName = "Poland";
   }

   $.ajax({
      url: euUrl + countryName,
      success: showCountriesList,
      // success: (data) => {
      //    console.log(data);
      //    showCountriesList(data);
      // },
      error: showError,
      cache: false
   });

   console.log(countryName);
};

// const showCountriesList = (resp) => {
//    countriesList.empty();
//    resp.forEach(function(item) {
//       console.log(item.name);
//       $('<li>').text(item.name).appendTo(countriesList);
//    });
// };

const showError = () => {
   countriesList.empty();
   countriesList.append('<li>Country not found</li>');
   searchInput.addClass('error');
};

const showCountriesList = (resp) => {
   console.log(resp);
   countriesList.empty();
   searchInput.removeClass('error');
   resp.map((item) => {
      let country = $('<li>');
      let flag  = $("<span>");
      let head = $("<div>");
      let info = $("<div>");

      flag.addClass("flag-icon");
      flag.addClass(`flag-icon-${item.alpha2Code}`.toLowerCase());

      flag.appendTo(head);
      $("<h3>").text(`${item.name} (${item.alpha2Code})`).appendTo(head);

      $("<p>").text(`Native name: ${item.nativeName}`).appendTo(info);
      $("<p>").text(`Capital: ${item.capital}`).appendTo(info);
      $("<p>").text(`Currencies: ${item.currencies.join(", ")}`).appendTo(info);
      $("<p>").text(`Subregion: ${item.subregion}`).appendTo(info);
      $("<p>").text(`Population: ${item.population} people`).appendTo(info);
      $("<p>").text(`Area: ${item.area} sqare km`).appendTo(info);


      country.append(head)
             .append(info);

      country.appendTo(countriesList);
   });
};


// Add CLICK and KEYUP listeners
searchButton.click(searchCountries);
searchInput.keyup((event) => {
   if (event.keyCode == 13) {
      searchButton.click();
   }
});



//TEST

// const flag = $('#flag');
// const papa = Papa.parse('../node_modules/flag-icon-css/flags/4x3/ai.svg');
// console.log(papa);