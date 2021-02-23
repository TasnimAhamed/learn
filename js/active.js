$(document).ready(function () {
  new TypeIt('.type-text', {
    strings: ['Our interdisciplinary majors and minors mean you can chart your own course for academic success !'],
    loop: false,
    breakLines: false,
    speed: 40,
    lifeLike: true,
    waitUntilVisible: true
  }).go();
  // ---------------
  // ? WOW JS
	new WOW().init();
  // ? Counter UP JS
  $(".count-number").counterUp({
		delay: 10,
		time: 1000
		});

  // ?MixItUp JS
  var containerEl = document.querySelector('.mix_container');
  var mixer = mixitup(containerEl, {
      selectors: {
          control: '[our-mixitup-control]'
      }
  });

  // ?OWL Carousel
  $(".testmonial").owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    nav:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(".testmonial").hover(function () {
    $(".owl-nav button").fadeIn();
  });

  $(".testmonial").mouseleave(function () {
    $(".owl-nav button").fadeOut();
  });

  // ?==================
  $(window).scroll(function(){
    var navFixed = $(window).scrollTop();
    if(navFixed > 200){
      $(".main_nav").removeClass("py-4").addClass("fixed-top bg-white nav-border animated fadeInDown faster");
      $(".banner_sec").addClass("mt-105");
    }else{
      $(".main_nav").removeClass("fixed-top bg-white nav-border animated fadeInDown faster").addClass("py-4");
      $(".banner_sec").removeClass("mt-105");
    }
  });

   // ?Smooth Section for Section

   $('a.section-scroll[href*="#"]:not([href="#"])').on("click", function (
    event
  ) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") ||
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          750
        );
        return false;
      }
    }
  });

  // ? One Nav

  $('#main_nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  });
  // ?Go Top Button

  $(".go_top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  $(".go_top").hide();

  $(window).scroll(function () {
    var ourwindow = $(this).scrollTop();
    if (ourwindow < 500) {
      $(".go_top").fadeOut();
    } else {
      $(".go_top").fadeIn();
    }
  });

});
 