$( function() {
  $("ul.nav li.ajaxload").click(function() {
    if(!$(this).hasClass("active"))
    {$("ul.nav li").removeClass("active");
      $(this).addClass("active");
    }

  $.get($(this).children("a").attr("data-load"), function(data) {
    $('div.content').fadeOut('slow', function() {
      $("div.content").html(data);
      $('div.content').fadeIn('slow');
    });
  });
});

  $( '#gallery' ).jGallery();
} );
