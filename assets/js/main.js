$(".menu-btn").on("click", () => {
  $(".navigation-mobile").toggleClass("open closed");
});

if ($(".animation-parent").length) {
  const observerOptions = {
    threshold: [0.25, 0.5, 0.75]
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        $(entry.target)
          .find(".not-visible")
          .each((index, elem) => {
            $(elem).removeClass("not-visible");
            $(elem).addClass("visible");
            if ($(elem).hasClass("carousel")) {
              scrollCarouselLeft(elem);
            }
          });
      }
    });
  }, observerOptions);

  $(".animation-parent").each((index, elem) => {
    observer.observe(elem);
  });
}

function scrollCarouselLeft(carousel) {
  setTimeout(() => {
    let scrollPos = $(carousel).width();
    $(carousel).animate({ scrollLeft: scrollPos }, 500, () => {
      let removed = $(carousel)
        .children(".carousel-page")
        .first()
        .remove();
      $(carousel)
        .first()
        .scrollLeft(0);
      $(carousel).append(removed);
      scrollCarouselLeft(carousel);
    });

    $(carousel)
      .children(".carousel-page")
      .first()
      .animate({ opacity: 0 }, 500);
    $(carousel)
      .children(".carousel-page")
      .first()
      .next()
      .animate({ opacity: 1 }, 500);
  }, 5000);
}

const setVH = () => {
  let vh = window.innerHeight / 100;
  console.log(vh);
  $(":root").prop("--vh", `${vh}px`);
};

$(window).on("resize", setVH);
setVH();

// const sectionFooterPos = $(".section-footer").offset().top;

// $(window).on("load", () => {
//   if ($(window).scrollTop() === 0) {
//     $(".section-footer").addClass("fixed");
//   }
// });

// $(window).on("scroll", e => {
//   // console.log($(window).scrollTop() + $(window).height());
//   // console.log(sectionFooterPos + $(".section-footer").height());
//   if (
//     $(window).scrollTop() + $(window).height() >=
//     sectionFooterPos + $(".section-footer").height()
//   ) {
//     $(".fixed").removeClass("fixed");
//   }
// });

$(".gradient-btn").on("click", () => {
  $(".modal").removeClass("hidden");
});
