$(document).ready(function() {
  $(".food-list").on("click", function() {
    const childrenClass = $(this).html().trim();
    $(`#${childrenClass}`).toggle();
  });
});
