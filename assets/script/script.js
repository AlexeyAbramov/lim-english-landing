$(document).ready(function () {
  $("#yt__play").click(function () {
    // $(this).parent().children()[0].src += "&autoplay=1";
    player.playVideo();
    $(".yt__preview").hide();
    $(".ytplayer").addClass("active");
    $(".ytplayer").height($(".yt__preview").height());
    setTimeout(() => {
      $(this).hide();
    }, 500);
  });
  //tabs
  $("ul.tabs-process__list").on("click", "li:not(.active)", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.tabs-process")
      .find("div.tabs-process__content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
  $("div.list-questions__status").on("click", function () {
    $("li.list-questions__item.active").removeClass("active");
    $(this).closest("li.list-questions__item").toggleClass("active");
  });

  //SLICK
  $(".list-feedback").slick({
    infinity: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="list-feedback__prev"></button>',
    nextArrow: '<button type="button" class="list-feedback__next"></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $("#header-menu").click(function () {
    $(this).toggleClass("open");
    $("#drop-menu").toggleClass("open");
  });
  $(".header-language").click(function () {
    $(this).toggleClass("active");
  });
  $(".right-header__registration, .result__button").click(function (e) {
    e.preventDefault();
    $(".popup").addClass("active");
    $("html").addClass("overflow");
  });
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var popup = $(".popup.active"); // тут указываем ID элемента
    if (
      popup.is(e.target) && // если клик был не по нашему блоку
      popup.has(e.target).length === 0
    ) {
      $("html").removeClass("overflow");
      $(".popup").removeClass("active");
    }
  });
});
