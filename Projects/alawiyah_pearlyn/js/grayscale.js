(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  })

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict


//Custom JS
// quotes
  const quote= 
  [
    "Challenges are what make life interesting. Overcoming them is what makes life meaningful. – Joshua Marine",
    "Success is the best revenge for anything. - Ed Sheeran",
    "The good life is inspired by love and guided by knowledge. - Bertrand Russell",
    "Where there is love there is life. - Mahatma Gandhi",
    "If music be the food of love, play on. - William Shakespeare "
  ] ;


  setInterval(() => {
    $.ajax({
    url: `http://172.20.10.2:1880/test`,
    success: function(response) {
        console.log(JSON.stringify(response))
        document.getElementById("quote").innerHTML = quote[Math.floor(Math.random() * quote.length)];
        
    }
    },
    error: function() {
        console.log("There was an error processing your request. Please try again.");
    }
    });




