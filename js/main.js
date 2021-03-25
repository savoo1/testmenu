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
    $("body").css("overflow", "auto");
    $("html").css("overflow", "auto");
});
$('.navbar .wrapper .hambmenu, .navbar .wrapper .searchicon').click(function(e) {
    e.preventDefault();
    $(".navbar .wrapper .navonphone").addClass("navonphone_active");
    $("body").css("overflow", "hidden");
    $("html").css("overflow", "auto");
});
$('.navbar .forxicon2 .xicon').click(function(e) {
    e.preventDefault();
    $(".navbar .wrapper .linkwd .leftside .activea").removeClass("activea");
 	 $(".links_active").removeClass("links_active");
    $(".navbar .wrapper .linkwd .dropdowns").removeClass("dropdowns_ac");
});



$('.browsepage .wrapper .rightside .workspace .options .list').click(function(e) {
    e.preventDefault();
    $(".workspace_grid").removeClass("workspace_grid");
});
$('.browsepage .wrapper .rightside .workspace .options .grid').click(function(e) {
    e.preventDefault();
    $(".workspace").addClass("workspace_grid");
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


$('.browsepage .wrapper .filters .filterarea h3').click(function(e) {
    if($(this).parent().hasClass("activefilters")){
      $(this).parent().removeClass("activefilters");
    }else{
      $(this).parent().addClass("activefilters");
    }
});

$('.browsepage .wrapper .filters .checkedfilters .clearall').click(function(e) {
    e.preventDefault();
    $(".browsepage .wrapper .filters .activefilters .checkboxes input").prop( "checked", false );
    $(".browsepage .wrapper .filters .checkedfilters p").remove();
    $(".checkedfilters").removeClass("checkedfilters_active");
    $("h2 .forno").html("0"); 
      $(".browsepage .wrapper .rightside .filtersbtn a span").html("0");

});
$('.browsepage .wrapper .rightside .filtersbtn a').click(function(e) {
    e.preventDefault();
    $(".browsepage .wrapper .filters").addClass("filters_active");
});
$('.browsepage .wrapper .filters .btnphone a').click(function(e) {
    e.preventDefault();
    $(".browsepage .wrapper .filters").removeClass("filters_active");
});

$('.browsepage .wrapper .filtersbefore').click(function(e) {
    e.preventDefault();
    $(".browsepage .wrapper .filters").removeClass("filters_active");
});

$('.browsepage .wrapper .filters .filterarea .checkboxa .container_checkbox').change(function(e) {
    if ($(this).find('input').is(':checked')) {
      var filtername = $(this).find(".t").html();
      var filterforclass = filtername.replace(/ /g,'').replace(/[^\w\s]/gi, '');

      var stringforc = "<p attr='"+filterforclass+"' class='"+filterforclass+"'>" + filtername + " <img src='img/xf.svg' class='xfc' alt=''></p>";
      $(this).parent().parent().parent().parent().parent().find(".checkedfilters").append(stringforc);
      $(this).addClass(filterforclass);
      iforfilter = parseInt($("h2 .forno").html()) + 1;
      $("h2 .forno").html(iforfilter);
      $(".browsepage .wrapper .rightside .filtersbtn a span").html(iforfilter);

    }else{
      var filtername = $(this).find(".t").html();
      var filterforclass = "." + filtername.replace(/ /g,'').replace(/[^\w\s]/gi, '');
      $(".browsepage .wrapper .filters .checkedfilters").find(filterforclass).remove();


      iforfilter = parseInt($("h2 .forno").html()) - 1;
      $("h2 .forno").html(iforfilter); 
      $(".browsepage .wrapper .rightside .filtersbtn a span").html(iforfilter);
    }

    $('.browsepage .wrapper .filters .checkedfilters p img').click(function(e) {
        var classforr = $(this).parent().attr( "attr" ) + " input";
        $(this).parent().remove();

        $(".browsepage .wrapper .filters .activefilters .checkboxes").find("."+classforr).prop( "checked", false );
    });

    if(iforfilter == 0){
      $(".checkedfilters").removeClass("checkedfilters_active");
    }else{
      $(".checkedfilters").addClass("checkedfilters_active");
    }

    
});

// $('.browsepage .wrapper .filters .checkedfilters p img').on("click", function(event){
//   console.log($(this).text());
//     alert("2");
// });
$(document).on('click', function(event){
     if( $(event.target).hasClass('xfc')){
      iforfilter = parseInt($("h2 .forno").html()) - 1;
        $("h2 .forno").html(iforfilter); 
      $(".browsepage .wrapper .rightside .filtersbtn a span").html(iforfilter);

      if(iforfilter == 0){
        $(".checkedfilters").removeClass("checkedfilters_active");
      }else{
        $(".checkedfilters").addClass("checkedfilters_active");
      }
     }
});


$('.detaols_sec2 .wrapper .rightbox .dataswp .showitc').click(function(e) {
    e.preventDefault();
    if($(this).parent().hasClass("dataswp_active")){
      $(this).parent().removeClass("dataswp_active");
    }else{
      $(this).parent().addClass("dataswp_active");
    }
});

$('.detaols_sec2 .wrapper .tit2').click(function(e) {
    e.preventDefault();
    if($(this).parent().hasClass("tabonphone2_active")){
      $(this).parent().removeClass("tabonphone2_active");
    }else{
      $(this).parent().addClass("tabonphone2_active");
    }
});
$('.detaols_sec2 .wrapper .h1_v2').click(function(e) {
    e.preventDefault();
    if($(this).parent().hasClass("tabonphone2_active")){
      $(this).parent().removeClass("tabonphone2_active");
    }else{
      $(this).parent().addClass("tabonphone2_active");
    }
});


$( window ).resize(function() {
  if ($(window).width() > 992) {
    $(".section2 .tabs .tab").removeClass("activetab");
    $(".section2 .tabs .tab:first-child").addClass("activetab");
    $(".section2 .tabscont .cont").removeClass("active_cont");
    $(".section2 .tabscont .cont:first-child").addClass("active_cont");
  }
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








