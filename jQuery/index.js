$("body").keydown(function (event) {
  const key = event.key;
  $("h1").text(key);
});
