// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.clasList.remove("navbar-fixed");
  }
};

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