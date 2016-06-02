$("ul.nav li.ajaxload").click(function() {
  $.get("http://www.sunilchowdhary.com" + $(this).children("a").attr("data-load"), function(data) {
    $("div.content").html(data)
  });
});
