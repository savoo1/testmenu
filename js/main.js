$('.navbar .wrapper .linkwd .leftside a, .navbar .wrapper .linkwd .link, .navbar .wrapper .linkwd2 .link').click(function(e) {
    e.preventDefault();
});
$( ".navbar .wrapper .linkwd .leftside a, .navbar .wrapper .linkwd2 .link" ).hover(
  function() {
    $(".navbar .wrapper .linkwd .dropdowns").addClass("dropdowns_ac");
    $(".navbar .wrapper .linkwd .leftside a").removeClass("activea");
    $(this).addClass("activea");
    var attribut = "." + $(this).attr( "attr" );
    if ($(window).width() < 992) {
		setTimeout(function() {
		   $(".links_active").removeClass("links_active");
		   $(attribut).addClass("links_active");
		}, 200);
    }else{
    	$(".links_active").removeClass("links_active");
    	$(attribut).addClass("links_active");
    }
  }, function() {
  }
);
$('.navbar .wrapper .linkwd .leftside a, .navbar .wrapper .linkwd2 .link').click(function(e) {
    e.preventDefault();
    $(".navbar .wrapper .linkwd .dropdowns").addClass("dropdowns_ac");
    $(".navbar .wrapper .linkwd .leftside a").removeClass("activea");
    $(this).addClass("activea");
    var attribut = "." + $(this).attr( "attr" );
    if ($(window).width() < 992) {
		setTimeout(function() {
		   $(".links_active").removeClass("links_active");
		   $(attribut).addClass("links_active");
		}, 200);
    }else{
    	$(".links_active").removeClass("links_active");
    	$(attribut).addClass("links_active");
    }
});
$( window ).resize(function() {
  $(".links_active").removeClass("links_active");
    $(".navbar .wrapper .linkwd .dropdowns").removeClass("dropdowns_ac");
});
$('.navbar .forxicon1 .xicon').click(function(e) {
    e.preventDefault();
    $(".navbar .wrapper .linkwd .leftside .activea").removeClass("activea");
    $(".navbar .wrapper .navonphone").removeClass("navonphone_active");
 	 $(".links_active").removeClass("links_active");
    $(".navbar .wrapper .linkwd .dropdowns").removeClass("dropdowns_ac");
});
$('.navbar .wrapper .hambmenu, .navbar .wrapper .searchicon').click(function(e) {
    e.preventDefault();
    $(".navbar .wrapper .navonphone").addClass("navonphone_active");
});
$('.navbar .forxicon2 .xicon').click(function(e) {
    e.preventDefault();
    $(".navbar .wrapper .linkwd .leftside .activea").removeClass("activea");
 	 $(".links_active").removeClass("links_active");
    $(".navbar .wrapper .linkwd .dropdowns").removeClass("dropdowns_ac");
});




$('.section2 .tabs .tab').click(function(e) {
    e.preventDefault();
    $('.section2 .tabs .tab').removeClass("activetab");
    $(this).addClass("activetab");
    var attribut = "." + $(this).attr( "attr" );
    $(".active_cont").removeClass("active_cont");
    $(attribut).addClass("active_cont");
});
$('.section2 .showslideritems h3').click(function(e) {
    e.preventDefault();
    $(".active_cont").removeClass("active_cont");
    $(this).parent().parent().addClass("active_cont");

    setTimeout(function() {
       var positionofthis = $(".section2 .tabscont .active_cont h3").offset().top - 90;
       $("html, body").animate({ scrollTop: positionofthis }, 500);
    }, 250);
    

});
$( window ).resize(function() {
  $(".section2 .tabs .tab").removeClass("activetab");
  $(".section2 .tabs .tab:first-child").addClass("activetab");
  $(".section2 .tabscont .cont").removeClass("active_cont");
  $(".section2 .tabscont .cont:first-child").addClass("active_cont");
});




$('.slider-nav').slick({
  slidesToShow: 5,
  variableWidth: true,
  slidesToScroll: 1,
  focusOnSelect: true,
  infinite: false,
  responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          variableWidth: false,
        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          variableWidth: false,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        }
      },
    ]
});








