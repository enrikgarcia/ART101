$(function () {
  $("#mia").on("click", function () {
    $(#mia).css({
      background-color: black,
      "color": "white"
    });

    $(this).text("Write your message about Mia here!");
  });

  $("#anthony").on("click", function () {
    $(this).css({
      "background-color": "black",
      "color": "white"
    });

    $(this).text("Write your message about Anthony here!");
  });

  $("#gio").on("click", function () {
    $(this).css({
      "background-color": "black",
      "color": "white"
    });

    $(this).text("Write your message about Gio here!");
  });
});

