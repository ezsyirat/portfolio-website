// Navbar fixed
$(window).on("scroll", function () {
  const $header = $("header");
  const fixedNav = $header.offset().top;

  if ($(window).scrollTop() > fixedNav) {
    $header.addClass("navbar-fixed");
  } else {
    $header.removeClass("navbar-fixed");
  }
});

// Hamburger
$("#hamburger").on("click", function () {
  $(this).toggleClass("hamburger-active");
  $("#nav-menu").toggleClass("hidden");
});

// Hover running text
$(document).ready(function () {
    $('#marquee').hover(
      function () {
        $(this).css('animation-play-state', 'paused');
      },
      function () {
        $(this).css('animation-play-state', 'running');
      }
    );
  });