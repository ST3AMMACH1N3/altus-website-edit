$(".leadership-carousel").hover(
  () => {
    clearTimeout(animationTime);
  },
  e => {
    const { currentTarget } = e;
    setTimeout(() => {
      scrollCarouselLeft(currentTarget);
    }, 2000);
  }
);
