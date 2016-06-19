$("ul.nav li.ajaxload").click(function() {
  $.get("//www.sunilchowdhary.com" +    $(this).children("a").attr("data-load"), function(data) {
    $('div.content').fadeOut('slow', function() {
      $("div.content").html(data);
      $('div.content').fadeIn('slow');
    });
  });
});
