$(document).ready(function () {
  //show nav
  $(".toggle-bar").click(() => {
    $("body").addClass("show");
  });

  $("i.fa-times").click(() => {
    $("body").removeClass("show");
  });

  //sticky navbar
  $(window).scroll(() => {
    if ($(this).scrollTop()) {
      $(".nav").addClass("fix-nav");
    } else {
      $(".nav").removeClass("fix-nav");
    }
  });

  //Handle Hide Preloader
  setTimeout(() => {
    $(".preloader").addClass("hide");
  }, 2000);

  //Show Modal
  setTimeout(() => {
    $(".modal").addClass("showModal");
    $(".black-box").addClass("show");
  }, 4000);

  $(".modal-close").click(() => {
    $(".modal").removeClass("showModal");
    $(".black-box").removeClass("show");
  });

  //Handle Scroll
  $(".scroll-link").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    const navHeight = $(".nav").height();

    $("html, body").animate(
      { scrollTop: $(href).offset().top - navHeight },
      1000
    );
    if (href === "#home") {
      $("html, body").animate({ scrollTop: 0 }, 1000);
    }

    if ($("body").hasClass("show")) {
      $("body").removeClass("show");
    }
  });
});
