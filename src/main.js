$(".hamburger").click(function(){
  console.log("ok");
  $(".nav-dropdown").toggleClass("nav-dropdown-open");
  $("html").toggleClass("inactive");
});