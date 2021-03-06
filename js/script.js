$(document).ready(function() {
  // Nav icon
  $('#nav-icon').click(function() {
    $(this).toggleClass('open');
    $("#menu-overlay").toggleClass("menu-show");
  });

});

var heroHeight;


if ($(".hero").length) {


  $(window).on("load resize", function() {

    heroHeight = $(".hero").outerHeight();
    if ($(window).scrollTop() >= heroHeight - 35) {
      $("#nav-icon").addClass("dark");
    }

    //Начальная страница Header

    var heroTextHeight = $(".start-page .text").height();

    if ($(window).height() < heroTextHeight) {
      $(".start-page").addClass("cut");
    } else {
      $(".start-page").removeClass("cut");
    }

    $('.start-page').css("min-height", $(window).height());

  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= heroHeight - 35) {
      $("#nav-icon").addClass("dark");
    } else {
      $("#nav-icon").removeClass("dark");
    }
  });

}

// плагин для открытия навигации
var lastId,
  topMenu = $("#menu.scroll"),
  //topMenuHeight = topMenu.outerHeight()+145,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

$('ul.menu-click.scroll a[href*=#]').bind('click', function(e) {
  e.preventDefault();
  var target = $(this).attr("href");

  $("#nav-icon").removeClass('open');
  $("#menu-overlay").removeClass("menu-show");

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000 );

  return false;
});




//иконка меню
$(".icon").click(function() {
  $("#menu-overlay").toggleClass("menu-show");
});



//создание прелодера
$(window).load(function() {	
	var urlVar = $.getUrlVar('target');
	target = urlVar.replace(/\//g,'');
	
	if (target && $('body').hasClass('index')) {
		
		window.history.replaceState('home', '', '/');
		
		setTimeout(function() {
			
			heroHeight = $(".hero").outerHeight();
			
			var $container = $('.grid').imagesLoaded(function() {
				$container.isotope({
				  itemSelector: 'li',
				  masonry: {
				
				  }
				});
			});
			
			$(".preloader").fadeOut(500);

			$('html, body').stop(true, true).delay(400).animate({
			  scrollTop: $('#' + target).offset().top
			}, 1000);
			
		}, 800);
	}
	else {
		heroHeight = $(".hero").outerHeight();
		$(".preloader").delay(800).fadeOut("slow");
	}
});


(function($){
	$.getUrlVar = function(key){
		var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
		return result && unescape(result[1]) || ""; 
	};
})(jQuery);


