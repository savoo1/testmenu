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
$('.navbar .forxicon .xicon').click(function(e) {
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




