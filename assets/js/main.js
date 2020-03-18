let paused, animationTime;

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
              setTimeout(() => {
                scrollCarouselLeft(elem);
              }, 5000);
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
  animationTime = setTimeout(() => {
    scrollCarouselLeft(carousel);
  }, 5000);
  if (paused) return;
  let scrollPos = $(carousel).width();
  $(carousel).animate({ scrollLeft: scrollPos }, 500, () => {
    let removed = $(carousel)
      .children(".carousel-page")
      .first()
      .detach();
    $(carousel)
      .first()
      .scrollLeft(0);
    $(carousel).append(removed);
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
}

$(".navigation-mobile a").on("click", () => {
  $(".navigation-mobile").toggleClass("open closed");
});

$(".gradient-btn").on("click", e => {
  e.stopPropagation();
  $(".modal").removeClass("hidden");
});

$(".modal").on("click", e => {
  e.stopPropagation();
});

$(document).on("click", e => {
  if ($(".modal").hasClass("hidden")) {
    return;
  }
  $(".modal").addClass("hidden");
});
