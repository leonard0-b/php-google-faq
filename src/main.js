$(".hamburger").click(function(){
  console.log("ok");
  $(".nav-down").toggleClass("nav-down-open");
  $("html").toggleClass("inactive");
  $("nav").toggleclass("inactive");

});