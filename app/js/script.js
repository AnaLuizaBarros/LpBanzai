var $top = 215;
var $Lastscroll = 0;
$(document).on("scroll", function () {
  console.clear();
  console.log($(this).scrollTop());
  $Actualscroll = $(this).scrollTop();
  if ($Actualscroll > $Lastscroll) {
    $top += 3;
  } else if ($Actualscroll === 0) {
    $top = 215;
  } else if ($Actualscroll === 1564) {
    $top = 430;
    console.log("oi");
  } else {
    $top -= 3;
  }
  $("#make-contact").css("top", $top + "px");

  $Lastscroll = $Actualscroll;
  console.log($top);
  console.log($Actualscroll);
});
function next() {
  $("#carCarousel").slick("slickNext");
}

function prev() {
  $("#carCarousel").slick("slickPrev");
}
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,

  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
