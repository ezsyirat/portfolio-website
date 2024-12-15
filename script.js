$(document).ready(function () {
    $('#marquee').hover(
      function () {
        $(this).css('animation-play-state', 'paused'); // Pause animasi saat di-hover
      },
      function () {
        $(this).css('animation-play-state', 'running'); // Lanjutkan animasi saat hover dihapus
      }
    );
  });