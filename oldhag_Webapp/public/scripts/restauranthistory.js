$(document).ready(function() {
  let isShow = {};

  $(".food-list").on("click", function() {
    const idName = $(this)
      .html()
      .trim();

    if (isShow[idName] === undefined) {
      isShow[idName] = true;
    }

    if (isShow[idName]) {
      $(`#${idName}`).hide();
    } else {
      $(`#${idName}`).show();
    }

    isShow[idName] = !isShow[idName];
  });
});
