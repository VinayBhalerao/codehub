  //$("#navigation").tocify({ selectors: "h1.menu,h2.menu", theme: "bootstrap", extendPage: false });
$(".logo a").css("margin-left", $("#navigation").css("margin-left"));

// collapsible menu
$(function() {
  $('a').click(function(e) {
    
        
    $('html, body').animate( { scrollTop: $($.attr(this, 'href')).offset().top+'px' }, 500);
  });
  $('.multi').click(function(e) {
    if ($(this).children('#navigation').length == 0 ) {
      $(this).next('.tocsubheader').slideToggle();
      $(this).find('.fa').toggleClass("fa-chevron-left fa-chevron-down");
    }
    else {
      //$(this).find('#navigation ul ul').slideToggle();
    }
  });

  //Current position highlight
  var aChildren = $(".tocify1 .tocheader #this li").children();
  var aArray = [];
  for (var i=0; i< aChildren.length; i++) {
    var aChild = aChildren[i];
    var ahref = $(aChild).attr('href');
    aArray.push(ahref);
  }

  $(window).scroll(function() {
    var windowPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var docHeight = $(document).height();

    for (var i=0; i< aArray.length; i++) {
      var theID = aArray[i];
      var divPos = $(theID).offset().top-1;
      var divHeight = $(theID).parent().parent().height();
      if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
        $("a[href='" + theID + "']").parent().addClass('active');
      } else {
        $("a[href='" + theID + "']").parent().removeClass('active');
      }
    }

    if(windowPos + windowHeight == docHeight) {
      if (!$(".tocify1 .tocheader #this li:last-child a").parent().hasClass('active')) {
        var navActiveCurrent = $('.active').child().attr('href');
        $("a[href='" + navActiveCurrent + "']").removeClass('active');
        $(".tocify1 .tocheader #this li:last-child").addClass('active');
      }
    }
  });

});
/*$('.document-content img').baseline(30);
$('#search a').click(function(e) {
  $("#search").submit();
});*/
$(function() {
  $('#search-query').lunrSearch({
    indexUrl: '/search.json',             // URL of the `search.json` index data for your site
    results:  '#search-results',          // jQuery selector for the search results container
    entries:  '.entries',                 // jQuery selector for the element to contain the results list, must be a child of the results element above.
    template: '#search-results-template'  // jQuery selector for the Mustache.js template
  });
  $("#search-query").keydown(function(event) {
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
    $(this).val() ? $("#search-results").hide() : $("#search-results").show();
  });
  $("#search-query").keyup(function() {
    if ($(this).val() ) {
      $("#page-content").css("display", "none");
    } else {
      $("#page-content").css("display", "block");
    }
  });
});

$(function() {
  $('.multi > a').each(function() {
    if(window.location.pathname == $(this).attr('href'))
      $(this).parent().addClass('active');
  });
});