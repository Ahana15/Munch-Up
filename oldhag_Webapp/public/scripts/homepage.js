$(document).ready(function() {
  window.addEventListener("scroll", function() {
    const sliders = document.querySelector("#slider-effect");
    const distanceToTop = window.pageYOffset + sliders.getBoundingClientRect().top;

    const slideInAt = window.scrollY + window.innerHeight;
    if (slideInAt > distanceToTop + 60) {
      sliders.classList.add("showing");
    } else {
      sliders.classList.remove("showing");
    }
  });
})


