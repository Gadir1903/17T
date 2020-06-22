$(function () {
  $("img").css({
    width: "300px",
    margin: "20px",
    "border-radius": "25px",
  });

  $("img:even").css("float", "left");

  $("img:odd").css("float", "right");

  $("img").attr("alt", "Meşə");
  $("img").attr("title", "Meşə");

  $("#sekil").css({
    width: "100%",
    height: "100vh",
    "background-color": "rgba(0,0,0,.6)",
    "background-position": "center",
    "background-repeat": "no-repeat",
    position: "fixed",
    top: 0,
    left: 0,
    display: "none",
  });

  $("img").click(function () {
    let url = `url('${$(this).attr("src")}')`;
    $("#sekil").css({
      display: "block",
      "background-image": url,
    });
  });

  $("span").click(function () {
  
    $("#sekil").css({
      display: "none",
      
    });
  });
});



