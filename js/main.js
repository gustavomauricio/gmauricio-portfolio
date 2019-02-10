$(document).ready(function() {
  "use strict";

  // Smooth scroll to inner links
  $('.nav-link').each(function() {
    var href = $(this).attr('href');
    if(href.charAt(0) !== "#") {
      $(this).removeClass('nav-link');
    }
  });

	if($('.nav-link').length) {
		$('.nav-link').smoothScroll({ speed: 800 });
  }

  // Change nav when scroll
  $(function() {
    var header = $(".navbar");
    var navLink = $('.nav-link');

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 60) {
        header.addClass('scrolled');
        navLink.addClass('scrolled');
        header.removeClass('navbar-dark');
        header.addClass('navbar-light');
      } else {
        header.removeClass('scrolled')
        navLink.removeClass('scrolled');
        header.removeClass('navbar-light');
        header.addClass('navbar-dark');
      }
    });
  });

    // Insert letters with an interval
    const name = "Gustavo Mauricio";

    for(let i=0; i<=name.length; i++) {
      // Slices string from 0 to current iteration
      let nameSlice = name.slice(0, i);
      setTimeout(function() {
        $('#name').html(nameSlice);
      }, i * 150);
    }

    // Adds class to nav items when scrolling respective section
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
      $('.nav-link').each(function() {
      var href = $(this).attr('href');
        if (scroll + window.innerHeight === document.body.offsetHeight) {
          $('.nav-link').removeClass('color-orange');
          $("a[href*='contact']").addClass('color-orange');
        }
        if (scroll > $(href).offset().top - 1 && scroll < $(href).offset().top + $(href).outerHeight()) {
          $('.nav-link').removeClass('color-orange');
          $(this).addClass('color-orange');
        }
      });
    });

    $('.nav-link').on('click', function() {
      $('.navbar-collapse').removeClass('show');
    });
});

// Click handler for elements with dot class (carousel)
$(".dot").click(function() {
  $(".dot").removeClass("active");
  $(this).addClass("active");

  // Get index of the clicked dot
  var dotIndex = $(".dot").index(this);
  currentSkill(dotIndex);
})

function currentSkill(dotIndex) {
  var children = $('#skills-car').children("[id]");
  children.each(function(index){
    $(this).addClass("d-none");
    if(index == dotIndex)
      $(this).removeClass("d-none");
  });
}
