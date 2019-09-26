$(document).ready(function() {
  window.addEventListener("scroll", function() {
    const sliders = document.querySelector("#section1");
    const distanceToTop = window.pageYOffset + sliders.getBoundingClientRect().top;

    const slideInAt = window.scrollY + window.innerHeight;
    if (slideInAt > distanceToTop + 60) {
      sliders.classList.add("showing");
    } else {
      sliders.classList.remove("showing");
    }

    const section2 = document.querySelector("#section2");
    const section1DistanceToTop = window.pageYOffset + section2.getBoundingClientRect().top;
    if (slideInAt > section1DistanceToTop + 60) {
      section2.classList.add("showing");
    } else {
      section2.classList.remove("showing");
    }

    const historySection = document.querySelector("#history");
    const historyDistanceToTop = window.pageYOffset + historySection.getBoundingClientRect().top;
    if (slideInAt > historyDistanceToTop + 60) {
      historySection.classList.add("showing");
    } else {
      historySection.classList.remove("showing");
    }

  });
})


