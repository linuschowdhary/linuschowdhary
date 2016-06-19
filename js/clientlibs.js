$( function() {
  $("ul.nav li.ajaxload").click(function() {
  $.get($(this).children("a").attr("data-load"), function(data) {
    $('div.content').fadeOut('slow', function() {
      $("div.content").html(data);
      $('div.content').fadeIn('slow');
    });
  });
});

  $( '#gallery' ).jGallery();
} );
