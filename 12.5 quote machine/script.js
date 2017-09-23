$(function () {


   const tweetLink = "https://twitter.com/intent/tweet?text=";
   const quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
   // const quoteUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote";


   // function getQuote() {
   const getQuote = () => {
      // $.getJSON(quoteUrl, createTweet);
   
      $.ajax({
         url: quoteUrl,
         success: createTweet,
         cache: false
      });
   }


   // function createTweet(input) {
   const createTweet = (input) => {
      let data = input[0];

      let quoteText = $(data.content).text().trim();
      let quoteAuthor = data.title;

      if (!quoteAuthor.length) {
         quoteAuthor = "Unknown";
      }

      const tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;

      // LOOP FOR VALID QUOTE
      if (tweetText.length > 140) {
         getQuote();
      } else {
         console.log(tweetText.length);
         let tweet = tweetLink + encodeURIComponent(tweetText);
         $('.quote').text(quoteText);
         $('.author').text("Author: " + quoteAuthor);
         $('.tweet').attr('href', tweet);
      }

   }

   getQuote();
   $(".trigger").click(function () {
      getQuote();
   });

});