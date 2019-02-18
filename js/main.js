//Main Carousel
$(document).ready(function () {
  $('.main-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    dots: true
  })
});


//Product Carousel

$(document).ready(function () {
  $('.product-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
});

//Border of color selection

$("#color1").on("click", function () {
  $("#border1").toggleClass("border-selected");
  $("#color-selected").toggle($("#color-selected").text("Black"));
});
